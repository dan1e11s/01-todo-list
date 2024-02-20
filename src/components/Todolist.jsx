import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions/todos-actions';
import { selectVisibleTodos } from '../store/selectors/todos-selectors';
import { selectActiveFilters } from '../store/selectors/filter-selectors';

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilters);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul>
      {todos?.map((item) => (
        <li key={item.id}>
          <input
            checked={item.completed}
            type="checkbox"
            onChange={() => dispatch(toggleTodo(item.id))}
          />
          {item.title}
          <button onClick={() => dispatch(removeTodo(item.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
