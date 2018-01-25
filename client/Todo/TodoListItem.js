import React from 'react';
import { object, func } from 'prop-types';

const TodoListItem = ({ todo, done }) => <li>{todo.value}<input type="checkbox" onClick={done} /></li>;

TodoListItem.propTypes = {
  todo: object,
  done: func,
};

TodoListItem.defaultProps = {
  todo: object,
  done: () => {},
};

export default TodoListItem;
