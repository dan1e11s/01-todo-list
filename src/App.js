import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/actions/todos-actions';
import TodoList from './components/Todolist';
import Filters from './components/Filters';

const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="new todo" />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      <div>
        <Filters />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
