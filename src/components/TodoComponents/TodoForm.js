// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

function inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

function TodoForm(props) {
    return (
       <div className="inputForm">  
        <form>
            <input type="text" name="list" value={props.value} onChange={props.inputChangeHandler} placeholder="ENTER ITEM"/>
            <button>Add Todo</button>
        </form>
       </div>
    );
}

export default TodoForm;