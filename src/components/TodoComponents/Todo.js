//  a component that takes in the todo data and displays the task to the screen.

import React from 'react';
import TodoForm from './TodoForm';

function Todo(props) {
    return (
        <div className="todoComponent">
            <TodoForm />
        </div>
    )
}

export default Todo;