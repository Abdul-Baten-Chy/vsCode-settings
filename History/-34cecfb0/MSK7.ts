import express from "express";
import MyUserController from "../Controllers/MyUserController";
import { jwtParse } from "../midleware/Auth";
const router = express.Router();

// router.get("/", MyUserController.getCurrentUser);
router.post("/", MyUserController.createCurrentUser);
router.put("/", jwtParse, MyUserController.updateCurrentUser);

export default router;
