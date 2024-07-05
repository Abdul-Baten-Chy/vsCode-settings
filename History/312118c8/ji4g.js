// const express = require('express')
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import myUserRoute from "./Route/myUserRoute.js";
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("data base conected");
});
app.use("/api/my/users", myUserRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
