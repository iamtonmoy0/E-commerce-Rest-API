import express from "express";
import morgan from "morgan";
import xssClean from "xss-clean";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
// configuring env
dotenv.config();
// initialize app
const app = express();
// limiter
const limit = rateLimit({
  windowMs: 1 * 60 * 1000, //1 min
  max: 10, // Limit each IP to 10 requests per window
  message: "Too many request .Try again later",
});
// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(xssClean());
app.use(limit);

export default app;
