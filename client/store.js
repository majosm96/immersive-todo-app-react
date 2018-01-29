import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import todoReducer from './Todo/TodoReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

export default store;
