import express from "express";
import "dotenv/config";
import type { Express } from "express";
import connectDB from "./config/db.js";

const app: Express = express();
const PORT = Number(process.env.PORT);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log("Server Running at ", PORT);
  });
};

startServer()