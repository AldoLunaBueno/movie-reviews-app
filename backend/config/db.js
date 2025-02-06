import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = () => {
  const dbURI = process.env.MONGODB_URI;
  mongoose.connect(dbURI)
    .then(() => console.log("✅ Connected to MongoDB Atlas cloud database"))
    .catch((error) => {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // Exit process on failure
    });
};

export default connectDB