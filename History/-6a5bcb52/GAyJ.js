import express from "express";
import myUserController from "../controller/myUserController.js";

const router = express.Router();

// all the end point of  "/users" route
router.post("/", myUserController.createUser);
router.get("/", myUserController.getUser);

export default router;
