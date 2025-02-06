import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"
import movieRoutes from "./routes/movie.js";

connectDB();
const app = express();
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

export default app