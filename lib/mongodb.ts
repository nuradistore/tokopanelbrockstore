import { MongoClient, ServerApiVersion } from "mongodb";

import { appConfig } from "@/data/config";

/**
 * IMPORTANT (shared hosting friendly):
 * Don't throw at import time if the MongoDB URI isn't configured.
 * Some environments (cPanel/Passenger) will mark the app as failed and serve 503.
 *
 * We export a nullable promise. Callers must handle the "null" case.
 */
const uri = appConfig.mongodb.uri;

let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  const options = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  };

  if (process.env.NODE_ENV === "development") {
    // Preserve connection across HMR reloads in dev.
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }

    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  // Keep the process alive; DB features should degrade gracefully.
  // eslint-disable-next-line no-console
  console.warn("[tokopanel] MongoDB URI is not set; DB features are disabled.");
}

export default clientPromise;
