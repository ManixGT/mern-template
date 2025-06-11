import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  const dbString = process.env.DB_STRING;

  if (!dbString) {
    console.error("❌ DB_STRING is not defined in your .env file");
    process.exit(1); // Exit the process if the connection string is missing
  }

  try {
    await mongoose.connect(dbString); // Mongoose 6 automatically uses the latest defaults
    console.log("✅ MongoDB is connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
