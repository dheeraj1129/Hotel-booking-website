import mongoose from "mongoose";

const URL =
  "mongodb+srv://dheerajrawat339:your_password_here@project.y7k56ej.mongodb.net/your_database_name_here";

const connectDB = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB...");
};

export default connectDB;
