import React from 'react';
import { object, string, func } from 'prop-types';

const TodoListItem = props => <li>{props.todo.value}<span><input type="checkbox" onClick={props.handleDone} /></span><button>Delete</button></li>;

TodoListItem.propTypes = {
  todo: object,
  value: string,
  handleDone: func,
};

TodoListItem.defaultProps = {
  todo: object,
  value: '',
  handleDone: func,
};

export default TodoListItem;
