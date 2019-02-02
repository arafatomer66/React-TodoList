import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import Addtodo from './components/Addtodo';
// import uuid from 'uuid';



import './App.css';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => this.setState({todos : res.data})
    );
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

  // delTodo = (id) => {
  //   this.setState({
  //     todos: [...this.state.todos.filter(todo =>
  //       todo.id !== id
  //     )]
  //   });
  // }

  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
      this.setState({
        todos: [...this.state.todos.filter(todo =>
          todo.id !== id
        )]
      }) );
    
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos' , {
      title ,
      completed : false
    })
    .then(res => {
      this.setState({ todos: [...this.state.todos, res.data] })
    });
    
  }

  // addTodo = (title) => {
  //   const newTodo = {
  //     id: uuid.v4(),
  //     title,
  //     completed: false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo] })
  // }

  render() {

    return (

      <Router>
        <div className="App">

          <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
            <Todos
              markComplete={this.markComplete}
              todos={this.state.todos}
              delTodo={this.delTodo}>
            </Todos>
            </React.Fragment>
          )} />

           <Route path="/about" component = {About}  />

          </div>
        </div>
       
      </Router>
    );
  }
}

export default App;
