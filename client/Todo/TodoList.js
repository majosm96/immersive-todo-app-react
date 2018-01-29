import React from 'react';
import { array, func, string } from 'prop-types';

import TodoListItem from './TodoListItem';


const TodoList = props => (
  <div className="todoList">
    <div>
      <h1>To Do</h1>
      <input type="text" value={props.value} onChange={props.handleInputChange} />
      <button onClick={props.handleSubmit}>Add todo</button>
    </div>
    <ul>
      {
        props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} handleDone={props.handleDone} />)
      }
    </ul>
    <h1>Done List</h1>
  </div>
);


TodoList.propTypes = {
  todos: array,
  value: string,
  handleSubmit: func,
  handleInputChange: func,
  handleDone: func,
};

TodoList.defaultProps = {
  todos: [],
  value: '',
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleDone: () => {},
};

export default TodoList;
