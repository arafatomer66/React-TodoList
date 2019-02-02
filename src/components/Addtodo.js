import React, { Component } from 'react'

export class Addtodo extends Component {

    state = {
        title : ''
    }

    onSubmit = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
       this.props.addTodo(this.state.title);
       this.setState({ title : ''});
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    } 
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display : 'flex'}} >
        <input type="text" name="title" value={this.state.title} onChange={this.onChange}  style={{ flex : '10' , padding : '5px'}} placeholder="Add Todo ..." ></input>
        <input type="submit" value="Submit" className="btn" style={{ flex :'1' }} ></input>
      </form>
    )
  }
}
export default Addtodo ;
