import express from "express";
import MyUserController from "../Controllers/MyUserController";
import { jwtCheck } from "../midleware/Auth";
const router = express.Router();

// router.get("/", MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
// router.put("/", MyUserController.updateCurrentUser);

export default router;
