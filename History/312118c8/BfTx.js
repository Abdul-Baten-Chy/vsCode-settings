// const express = require('express')
import cors from "cors";
import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/users", myUserRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
