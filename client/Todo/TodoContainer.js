import React from 'react';
import TodoList from './TodoList';
import uuidv1 from 'uuid/v1';

class TodoContainer extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.render = this.render.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:3000/todos';
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.text());
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          // console.log(data);
          console.log(data);
          const myData = data;
          console.log(myData[1].value);
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    const todo = {};
    todo.id = uuidv1();
    todo.value = this.state.value;
    todo.done = false;
    this.setState({ todos: [...this.state.todos, todo] });
    // console.log(this.state.todos);
  }

  handleDone(event) {
    // console.log(this.state.todos);
    const id = event.target.parentNode.getAttribute('id');
    // console.log(id);
    this.state.todos.map((item) => {
      if (item.id == id) {
        console.log(item.id);
        item.done = true;
      }
      return item;
    });
    // console.table(this.state.todos);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div>
        <h1>Im a TodoContainer</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add task</button>
        <TodoList todos={this.state.todos} done={this.handleDone} />
        <h2>Done</h2>
      </div>
    );
  }
}

export default TodoContainer;
