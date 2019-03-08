// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const todos = [
  {
    task: 'Learn React!!',
    id: 123,
    completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            task: item.task,
            id: item.id,
            completed: item.completed,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    // console.log('running!');
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <button
            className="clearButton"
            onClick={this.clearCompleted}>Clear Completed
        </button>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;