// imports
import uuid from 'uuid/v1';

// API URL Constant
const API_URL = 'http://localhost:3000/todos';

// todo actions
// Add
const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

const addTodo = value => (dispatch) => {
  dispatch({
    type: ADD_TODO_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uuid(),
      value,
      done: false,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_TODO_SUCCESS,
        todo: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_TODO_FAILURE,
        error,
      });
    });
};

const getTodos = () => (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });
  fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: GET_TODOS_SUCCESS,
        todos: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_TODOS_FAILURE,
        error,
      });
    });
};


module.exports = {
  addTodo,
  getTodos,
};
