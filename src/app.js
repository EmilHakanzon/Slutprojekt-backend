import "dotenv/config";
import express from "express";
import { connect } from "mongoose";

// skapar en anslutning till mongoDB
const app = express();
const PORT = Number(process.env.PORT || 3000);
const MONGO_URL = process.env.MONGO_URL || "";

try {
  await connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log(`API listening on: http://localhost:${PORT}`);
  });
} catch (e) {
  console.error("MongoDB connection error:", e);
  process.exit(1);
}
