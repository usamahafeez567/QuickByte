import mongoose from "mongoose";

// define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  mobileNumber: { type: Number, required: true, length: 11 },
});

// define user  model
const User = mongoose.model("User", userSchema);
export default User;
