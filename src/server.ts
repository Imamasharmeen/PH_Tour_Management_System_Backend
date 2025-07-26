/* eslint-disable no-console */


import app from "./app";
import mongoose from "mongoose";
import { env_config } from "./config/env.config";

// let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(env_config.mongodb_url);

    console.log("✅ Connected to DB");

    app.listen(env_config.port, () => {
      console.log(`🚀 Server is running on port ${env_config.port}`);
    });
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
};

startServer();
