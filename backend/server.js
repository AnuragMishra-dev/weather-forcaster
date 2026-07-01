import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import cors from "cors";

import requestRouter from "./routers/userRequest.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", requestRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running at PORT ${process.env.PORT}`);
});
