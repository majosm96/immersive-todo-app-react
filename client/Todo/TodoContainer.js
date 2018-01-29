import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import TodoList from './TodoList';
import { addTodo, getTodos } from './actions';

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoVal: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDone = this.handleDone.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleInputChange(e) {
    this.setState({ newTodoVal: e.target.value });
  }

  handleSubmit() {
    this.props.addTodo(this.state.newTodoVal);
    this.setState({ newTodoVal: '' });
  }

  // handleDone(e) {
  //   this.props.doneTodo(e);
  // }

  render() {
    return this.props.loading
      ?
        <span className="spinnerBig">
          <span className="dot1" />
          <span className="dot2" />
        </span >
      :
        <TodoList
          todos={this.props.todos}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        // handleDone={this.handleDone}
          value={this.state.newTodoVal}
        />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: value => dispatch(addTodo(value)),
    loadData: () => {
      dispatch(getTodos());
    },
  };
}

TodosContainer.propTypes = {
  todos: array,
  addTodo: func,
  loadData: func,
};

TodosContainer.defaultProps = {
  todos: [],
  addTodo: () => {},
  loadData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
