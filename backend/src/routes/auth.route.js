import express from "express";
import {signup, login, logout, updateProfile, checkAuth} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

// Router ko initialize karo express se
const router = express.Router();

// User signup ka route - naye user ke liye
router.post("/signup", signup);

// Login ka route - existing users ke liye
router.post("/login", login);

// Logout ka route - session khatam karne ke liye
router.post("/logout", logout);

// Profile update ka route - protected hai (login required)
router.put("/update-profile", protectRoute, updateProfile);

// Auth check ka route - verify karta hai user logged in hai ya nahi
router.get("/check", protectRoute, checkAuth);

export default router;
