import express from "express";
import { getTodoList, getTodo, createTodo } from "../service/todoService";

const getTodoListController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const todoList = await getTodoList();
    return res.status(200).json({
      status: 200,
      data: todoList,
      message: "TODO-LIST"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
const getTodoController = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    params: { id }
  } = req;

  const todo = await getTodo(id);
  return res.json({
    status: 200,
    data: todo,
    message: "TODO"
  });
};

// POST
const createTodoController = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    query: { content }
  } = req;

  const todo = await createTodo(content);

  return res.json({
    status: 200,
    data: todo,
    message: "create"
  });
};

export { getTodoListController, getTodoController, createTodoController };
