import connectDB from "../../../../db";
import User from "@/models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function lander(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "Email already registered" });
    }
    // Generate hash
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    const result = await newUser.save();
    const token = jwt.sign({ user: result._id }, "code_dj", {
      expiresIn: "30d",
    });

    return res.status(201).json({ msg: "Success", token, user: result });
  }

  return res.status(404).json({ msg: "Invalid Request" });
}
