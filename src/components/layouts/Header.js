import React, { Component } from 'react' ;
import { Link }  from 'react-router-dom' ;

export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
    
       <h1>ToDo App With React</h1>
       <Link style={LinkStyle} to="/" >Home</Link> |
       <Link  style={LinkStyle} to="/about" >about</Link> 

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


const LinkStyle = {
   color : '#fff' ,
   textDecoration : 'none'
}

export default Header
