import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import Addtodo from './components/Addtodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Angular',
        completed: false
      },
      {
        id: 2,
        title: 'Reactjs',
        completed: false
      },
      {
        id: 3,
        title: 'Laravel',
        completed: false
      }
    ]
  }


  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });


  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    });
  }

  render() {

    return (
      <div className="App">

        <div className="container">
          <Header />
          <Addtodo />
          <Todos
            markComplete={this.markComplete}
    