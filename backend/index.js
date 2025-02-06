import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movie.js";

const setUpServer = () => {
  app.listen(3000, "0.0.0.0");
  app.use(
    cors({
      origin: "???",
      methods: ["GET", "POST", "DELETE", "UPDATE"],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use("/api/v1/movies", movieRoutes);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "not found" });
  });
};

const setUpDB = () => {
  const dbURI = process.env.MONGODB_URI;
  mongoose.connect(dbURI);
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB Atlas cloud database");
  });
};

const app = express();
dotenv.config();
setUpDB();
setUpServer();

export default app