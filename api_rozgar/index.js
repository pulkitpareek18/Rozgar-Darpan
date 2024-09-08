import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { loginRoute } from "./routes/login.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/register", loginRoute);
app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(
    "mongodb+srv://adityamalikm67:SV7pF552ZMRnz5Gj@cluster1.ioghx.mongodb.net/?retryWrites=true&w=majority&appName=cluster1"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
