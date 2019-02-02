import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
    
       ToDo App With React

      </header>
    )
  }
}

const headerStyle = {
    background : '#333' ,
    color : '#fff',
    textAlign : 'center' ,
    padding : '10px'
}

export default Header
