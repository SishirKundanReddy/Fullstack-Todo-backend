import * as todoService from "../service/todoservice.js";
const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.status(200).json({
      success: true,
      todos: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(200).json({
      success: true,
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { todoId } = await req.params;
    const todo = await todoService.deleteTodo(todoId);
    res.status(200).json({
      success: true,
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export{createTodo,deleteTodo,getTodos}