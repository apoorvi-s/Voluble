import mongoose from "mongoose";

// User ka schema define karo
const userSchema = new mongoose.Schema(
  {
    email:{
      type: String,
      required: true,  // Zaroori field
      unique: true,    // Har user ka unique email
    },
    fullName:{
      type: String,
      required: true,  // Zaroori field
    },
    password:{
      type: String,
      required: true,  // Zaroori field
      minLength: 6,    // Minimum 6 characters
    },
    profilePic:{
      type: String,
      default: "",     // Default khaali string
    },
  },
  {timestamps: true}   // Automatically created_at, updated_at fields
);

// User model create karo
const User = mongoose.model("User", userSchema);

export default User;
