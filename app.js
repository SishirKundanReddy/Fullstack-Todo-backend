import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import todoRoutes from "./routes/todoRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/todo", todoRoutes);
export default app;
