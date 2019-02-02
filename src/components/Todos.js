import React, { Component } from 'react';
import Todoitem from './Todoitem';

import PropTypes from 'prop-types';


class Todos extends Component {

  // markComplete =()=>{
  //   console.log('hellow');
  // }
    
  render() {
  
    return this.props.todos.map(
        (todo) => (
          <Todoitem 
          
          key={todo.id} 
          todo={todo} 
          markComplete={this.props.markComplete} 
          delTodo={this.props.delTodo}>
          </Todoitem>
        )
    )
  }
}

Todos.PropTypes = {
  todos : PropTypes.array.isRequired
}

export default Todos;