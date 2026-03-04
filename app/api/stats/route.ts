import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { appConfig } from "@/data/config"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"
export const revalidate = 0

export async function GET() {
  try {
    if (!clientPromise) {
      return NextResponse.json({ totalUsers: 0, totalServers: 0, totalPurchases: 0 })
    }
    const client = await clientPromise
    const db = client.db(appConfig.mongodb.dbName)

    const paymentsCollection = db.collection("payments")

    const totalPurchases = await paymentsCollection.countDocuments({ status: "completed" })

    const uniqueUsers = await paymentsCollection.distinct("username", { status: "completed" })
    const totalUsers = uniqueUsers.length

    const totalServers = totalPurchases

    return NextResponse.json({
      totalUsers,
      totalServers,
      totalPurchases,
    })
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
