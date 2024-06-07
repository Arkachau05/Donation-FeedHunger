import express from "express";
import { postMessage } from "../controllers/messageControllers.js";

const router=express.Router();

router.post("/send",postMessage);

export default router;