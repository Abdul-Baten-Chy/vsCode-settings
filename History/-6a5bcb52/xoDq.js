import express from "express";
import myUserController from "../controller/myUserController";

const router = express.Router();

// all the end point of  "/users" route
router.post("/", myUserController.createUser);
