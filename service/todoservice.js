import todo from "../models/todoModel.js";
import dotenv from "dotenv";

dotenv.config();
const createTodo = async (todoData) => {
  return await todo.create(todoData);
};
const getTodos = async () => {
  return await todo.find();
};
const deleteTodo = async (todoId) => {
  return await todo.findByIdAndDelete(todoId);
};
export {createTodo,getTodos,deleteTodo}
