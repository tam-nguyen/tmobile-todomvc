import React, { Component } from "react";

class TodoItem extends Component {

    constructor(){
        super();
        this.state={

        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        console.log(this.refs.date.value)
    }
  render() {
    let todo;
    todo = this.props.todo.map((todo, key) => {
      return (
        
          <div key={key} >
                {todo}
                <input
                type="date"
                className="input-box"
                id="date"
                ref="date"
                onChange={this.handleChange.bind(this)}
                
              />
              <button>Priority</button>
            </div>
        
      );
    });

    return <div>
        {todo}
        </div>;
  }
}

export default TodoItem;
