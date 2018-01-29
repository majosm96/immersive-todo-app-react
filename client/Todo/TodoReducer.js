// Todo reducer

const DEFAULT_STATE = {
  loading: false,
  todos: [],
  error: '',
};

const todos = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_TODOS_REQUEST':
      return {
        state,
        loading: true,
      };
    case 'GET_TODOS_SUCCESS':
      return {
        state,
        loading: false,
        todos: action.todos,
      };
    case 'GET_TODOS_FAILURE':
      return {
        state,
        loading: false,
        error: action.error,
      };
    case 'ADD_TODO_SUCCESS':
      return {
        state,
        todos: [...state.todos, action.todo],
      };
    default:
      return state;
  }
};

export default todos;

