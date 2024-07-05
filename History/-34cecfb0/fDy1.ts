import express from "express";
import MyUserController from "../Controllers/MyUserController";
import { jwtCheck } from "../midleware/Auth";
const router = express.Router();

// router.get("/", MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
