import React, { Component } from "react";
import TodoItem from "./TodoItem";

const ENTER_KEY = 13;

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: []
    };
  }

  handleNewTodoKeyDown = e => {
    if (e.keyCode !== ENTER_KEY) {
      return;
    }

    e.preventDefault();

    let val = this.refs.newtodo.value;

    if (val) {
      let newVal = this.state.newTodo;
      newVal.push(val);

      this.setState({
        newTodo: newVal
      });
    }
    this.refs.newtodo.value = "";
  };
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
            ref="newtodo"
            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
          />
        </header>
        <TodoItem todo={this.state.newTodo} />
      </div>
    );
  }
}

export default App;
