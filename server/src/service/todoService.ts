import { Todo } from "../entity/Todo";

const getTodoList = async (condition: Object = {}) => {
  const todoList = await Todo.find(condition);

  return todoList;
};

const getTodo = async (id: string) => {
  const todo = await Todo.findOne({ where: { id } });
  return todo;
};

const createTodo = async (content: string) => {
  const todo = Todo.create({ content });

  await todo.save();

  return todo;
};

export { getTodoList, getTodo, createTodo };
