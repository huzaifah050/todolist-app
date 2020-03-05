import React, { Component } from 'react';

export class AddTodos extends Component {
  state = {
    todo: ''
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      todo: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </form>
      </div>
    );
  }
}

export default AddTodos;
