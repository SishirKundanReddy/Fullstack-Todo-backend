import express from "express";
import * as todoController from "../controller/todoController.js";
const router = express.Router();
router.get("/get", todoController.getTodos);
router.get("gettodo/:todoId", todoController.getTodos);
router.post("/create", todoController.createTodo);
router.delete("/delete/:todoId", todoController.deleteTodo);
export default router;
