import React, { Component } from "react";

// Code DelayedButton Component Here
export default class DelayedButton extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (event) => {
    event.persist()
    this.props.onDelayedClick(event)
    return this
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}