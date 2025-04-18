import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Auth middleware - routes ko protect karta hai
export const protectRoute = async (req, res, next) =>{
  try {
    // Cookie se JWT token nikalna
    const token = req.cookies.jwt
    if(!token){
      return res.status(401).json({msg: "No account exists"});
    }

    // Token ko verify karna
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if(!decode)
    {
      return res.status(401).json({msg: "Invalid token"});
    }

    // User ko database se find karna (password ko chhod kar)
    const user = await User.findById(decode.userId).select(-"password");
    if(!user)
    {
      return res.status(404).json({msg: "User does not exist"});
    }

    // Request object mein user ko add karna
    req.user = user;
    next();
  } 
  catch (error) {
    console.log("error in protect route middleware", error.message);
    res.status(500).json({message: "Internal server error"});    
  }
}
