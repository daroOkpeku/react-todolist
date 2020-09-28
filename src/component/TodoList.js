import React, { Component } from 'react'
import TodoItem from "./Todoitem"
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>hello from TodoList</h3>
                <TodoItem />
            </div>
        )
    }
}
