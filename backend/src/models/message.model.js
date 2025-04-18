import mongoose from "mongoose";

// Message ka schema define karo
const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Sender ka reference User model se
    required: true // Zaroori field
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Receiver ka reference User model se
    required: true // Zaroori field
  },
  text: {
    type: String, // Message ka text
  },
  image: {
    type: String // Message ka image URL
  },
}, { timestamps: true }); // Automatically created_at, updated_at fields

// Message model create karo
const Message = mongoose.model("Message", messageSchema);
export default Message;
