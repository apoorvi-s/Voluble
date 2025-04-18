import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/message.controller.js';

// Router ko initialize karo express se
const router = express.Router();

// Users list ka route - sidebar ke liye (protected)
router.get("/users", protectRoute, getUsersForSidebar);

// Messages get karne ka route - specific user ke saath chat ke liye (protected)
router.get("/id",protectRoute, getMessages);

// Message send karne ka route - specific user ko (protected)
router.post("/send/:id", protectRoute, sendMessage);

export default router;
