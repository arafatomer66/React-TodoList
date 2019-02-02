import React, { Component } from 'react'

export class Addtodo extends Component {

    state = {
        title : ''
    }

    onSubmit = (e) => {
       
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
