import React, { Component } from 'react';

export default class DelayedButton extends Component {
  clickHandler = (event) => {
    event.persist();
    this.props.onDelayedClick(setTimeout(arg, this.props.delay));
  }
  
  render() {
    return (
      <div><button onClick={this.clickHandler} /></div>
    )
  }
  
  
}