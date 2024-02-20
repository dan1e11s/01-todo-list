import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/todos-const';

// actions creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId,
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  todoId,
});
