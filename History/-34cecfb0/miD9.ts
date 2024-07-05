import express from "express";
import MyUserController from "../Controllers/MyUserController";
const router = express.Router();

// router.get("/", MyUserController.getCurrentUser);
router.post("/", MyUserController.createCurrentUser);
router.put("/", MyUserController.updateCurrentUser);

export default router;
