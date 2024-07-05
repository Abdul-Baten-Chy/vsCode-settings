import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("database connected");
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "hellow" });
});

app.listen(4000, () => {
  console.log("app is listen on 4000 port");
});
