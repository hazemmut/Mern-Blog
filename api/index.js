import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database  connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, (req, res, next) => {
  console.log("Server is started!!! ");
});

app.use("/api/user", userRoutes);
