import express from "express";
import { Router } from "express";
import {
  deleteJob,
  postRecruiter,
  postUser,
  putJob,
} from "../controllers/user.controller.js";

const app = express();
const router = app.use(Router());

app.post("/user", postUser);
app.post("/recruiter", postRecruiter);
app.put("/recruiter/:id", putJob);
app.delete("/recruiter/:id", deleteJob);

export const loginRoute = router;
