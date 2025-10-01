import "dotenv/config";
import { connect } from "./db/mongoose.js";
import app from "./app.js";

const PORT = Number(process.env.PORT);
const MONGO_URI = process.env.MONGO_URI || "";

// skapar en asynkron funktion för att hantera uppstarten
(async () => {
  await connect(MONGO_URI);

  const server = app.listen(PORT, () =>
    console.log(`API listening on: http://localhost:${PORT}`),
  );

  // Graceful shutdown logik
  const shutdown = async (signal) => {
    console.log(`${signal} received, shutting down gracefully...`);

    server.close(async () => {
      console.log("HTTP server closed");

      // Stäng databas-anslutning
      const mongoose = await import("mongoose");
      await mongoose.default.connection.close();
      console.log("Database connection closed");

      console.log("Process terminated gracefully");
      process.exit(0);
    });

    // Force shutdown efter 10 sekunder
    setTimeout(() => {
      console.log("Force shutdown after timeout");
      process.exit(1);
    }, 10000);
  };

  // Lyssna på shutdown-signaler
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
})().catch((e) => {
  console.error("Fatal start error:", e);
  process.exit(1);
});
