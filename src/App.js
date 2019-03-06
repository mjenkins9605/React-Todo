// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Learn setState()',
          id: 1
        },
        {
          task: 'Style my Todo List',
          id: 2
        },
        {
          task: 'Virtual DOM re-write',
          id: 3
        },
        {
          task: 'Learn React!',
          id: 4
        }
      ],
      todoNew: ''
    };
  };


  todoNewAdd = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, { task: this.state.todoNew }],
      todoNew: ''
    });
  } 







render() {
  return (
    <div>
      <TodoForm />
      {/* <TodoList /> */}
      <h2>Welcome to your Todo App!</h2>
    </div>
  );
}
}

export default App;
