import cors from "cors";
import dotenv from "dotenv";
import express from "express";
const app = express();
const port = 3000;

app.use(cors());
dotenv.config();
