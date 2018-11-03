import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      dueDate: null
    };
  }
  handleChange = e => {
    e.preventDefault();
    console.log(this.refs.date.value);
    let dueDate = this.state.dueDate;
    dueDate = this.refs.date.value;
    this.setState({
      dueDate: dueDate
    });
  };
  render() {
    let todo;
    todo = this.props.todo.map((todo, key) => {
      return (
        <li key={key}>
          <label>{todo}</label>
          <span className="due-date">{this.state.dueDate}</span>

          <input
            type="date"
            className="input-box"
            id="date"
            ref="date"
            onChange={this.handleChange.bind(this)}
          />
          <button>Priority</button>
        </li>
      );
    });

    return (
      <div className="main">
        <ul className="todo-list">{todo}</ul>
      </div>
    );
  }
}

export default TodoItem;
