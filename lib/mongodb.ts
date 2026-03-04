import { MongoClient, MongoClientOptions } from "mongodb";
import { appConfig } from "@/data/config";

/**
 * NOTE:
 * - Build tools (Next/Vercel) import route modules during build.
 * - If we throw synchronously at import time when MONGODB_URL is missing,
 *   `next build` will fail (Failed to collect page data).
 *
 * So: never throw at module load. Instead, export a promise that only rejects
 * when it's actually awaited at runtime.
 */

const uri = appConfig?.mongodb?.uri || "";

const options: MongoClientOptions = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  clientPromise = Promise.reject(
    new Error("MongoDB is not configured. Set MONGODB_URI (or MONGODB_URL) to enable /api/stats.")
  );
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
