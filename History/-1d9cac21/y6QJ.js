import cors from "cors";
import dotenv from "dotenv";
import express from "express";
const app = express();

app.use(cors());
dotenv.config();
const port = process.env.PORT;
