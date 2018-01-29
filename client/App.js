import React from 'react';
import TodoContainer from './Todo/TodoContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <TodoContainer />
      </div>);
  }
}
