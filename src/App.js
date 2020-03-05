import React, { Component } from 'react';
import Todos from './Todos';

export default class App extends Component {
  state = {
    todos: [
      { todo: 'Go to CodeTrain', id: 1 },
      { todo: 'Read something', id: 2 }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="container main-app">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
