import express from "express";
import {
  getTodoListController,
  getTodoController,
  createTodoController
} from "../controller/todoController";

const router = express.Router();

// GET TODO LIST
router.get("/", getTodoListController);

// CREATE TODO LIST
router.post("/", createTodoController);

// GET TODO
router.get("/:id", getTodoController);

export default router;
