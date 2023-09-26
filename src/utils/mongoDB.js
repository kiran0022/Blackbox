import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blackbox");
    console.log("connected sucess");
  } catch (err) {
    console.log("error on connecting");
  }
};
