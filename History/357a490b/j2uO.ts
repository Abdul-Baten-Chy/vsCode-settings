import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "hellow" });
});
