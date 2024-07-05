import express from "express";
import MyUserController from "../Controllers/MyUserController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
