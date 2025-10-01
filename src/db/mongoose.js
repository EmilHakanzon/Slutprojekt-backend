import mongoose from "mongoose";

export async function connect(uri) {
  if (!uri) throw new Error("Missing MONGO_URI");
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
}

export async function disconnect() {
  await mongoose.disconnect();
}
