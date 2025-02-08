import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"
import movieRoutes from "./routes/movies.js";
import reviewRoutes from "./routes/reviews.js"

connectDB();
const app = express();
app.listen(3000, "localhost");
app.use(
  cors()
);
app.use(express.json());
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/reviews", reviewRoutes)
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app