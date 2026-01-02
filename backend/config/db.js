import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected succesfully");
  } catch (error) {
    console.error("DB Errors:", error.message);

    process.exit(1);
  }
};


export default connectDB;
