import React from 'react';
import { connect } from 'react-redux';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../actions/todos';
import List from './List';

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))

    }
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo.id))
        // return API.deleteTodo(todo.id)
        //     .catch(() => {
        //         this.props.dispatch(addTodo(todo))
        //         alert('an error accurred, Try again')
        //     })
    }
    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))

    }
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <input
                    type='text'
                    placeholder='Add ToDo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add ToDo</button>
                <List
                    toggle={this.toggleItem}
                    items={this.props.todos}
                    remove={this.removeItem}
                />
            </div>
        )
    }
}
export default connect((state) => ({
    todos: state.todos
}))(Todos)