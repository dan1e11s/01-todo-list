import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/todos-const';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    }

    case REMOVE_TODO: {
      return state.filter((item) => item.id !== action.todoId);
    }

    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }

    default:
      return state;
  }
};
