// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemText: ''
        };
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitItem = event => {
        this.setState({ itemText: '' });
        this.props.addItem(event, this.state.itemText);
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.state.itemText}
                    name="itemText"
                    onChange={this.handleChanges}
                />
                <button className="addButton">Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;