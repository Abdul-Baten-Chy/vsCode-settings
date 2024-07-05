import express from "express";
import myUserController from "../controller/myUserController.js";

const router = express.Router();

// all the end point of  "/users" route
router.post("/", myUserController.createUser);
router.get("/:email", myUserController.getUser);
router.put("/:email", myUserController.getUser);

export default router;
