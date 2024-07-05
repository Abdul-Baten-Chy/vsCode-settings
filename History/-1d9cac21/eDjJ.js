import cors from "cors";
import dotenv from "dotenv";
import express from "express";
const app = express();

app.use(cors());
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
