// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
    return (
        <div className="todo-list">
            {sortedList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    );
};

export default TodoList;