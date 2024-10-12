import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();
app.use(express.json());

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
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  res.status(statusCode).json({ success: false, statusCode, message });
});
