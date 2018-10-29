import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    let todo;
    todo = this.props.todo.map((todo, key) => {
      return (
        <ul>
          <li key={key}>{todo}</li>
        </ul>
      );
    });

    return <div>{todo}</div>;
  }
}

export default TodoItem;
