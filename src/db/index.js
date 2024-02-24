import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const mongodbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${mongodbUrl}/${DB_NAME}`
    );
    console.log(
      `\n Connected to the database: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    process.exit(1);
  }
};

export default connectDB;
