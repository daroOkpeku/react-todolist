import React, { Component } from 'react'
import TodoList from "./component/TodoList"
import TodoInput from "./component/TodoInput"

import uuid from "uuid"
export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="col bg-danger">hello world from app</h2>
        <TodoInput />
        <TodoList />




      </div>
    )
  }
}
