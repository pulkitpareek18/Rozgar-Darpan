import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import jobApiRouter from "./routes/jobApi.js";

export const app = express();

config({
  path: ".env",
});

// Using Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Using Routes
app.use("/api/v1", jobApiRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
