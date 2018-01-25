import React from 'react';
import { array, func } from 'prop-types';

import TodoListItem from './TodoListItem';


const TodoList = ({ todos, done }) => (
  <ul>
    {todos.map(item => <TodoListItem key={item.id} todo={item} done={done} />)}
  </ul>
);

TodoList.propTypes = {
  todos: array,
  done: func,
};

TodoList.defaultProps = {
  todos: [],
  done: () => {},
};

export default TodoList;
