import mongoose from "mongoose";

// Funktion för att koppla upp mot databasen
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Graceful shutdown for database
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
    });

    process.on("SIGTERM", async () => {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
