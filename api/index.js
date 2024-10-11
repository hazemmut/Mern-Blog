import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';



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

// KniP3WxOQ9BKS4gr

// mongodb+srv://hazeeemm5566:<db_password>@mern-blog.3xxjd.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog
