import express from "express";
import { jobApi } from "../controllers/jobApi.js";

const router = express.Router();

router.put("/jobapi", jobApi);


export default router;


