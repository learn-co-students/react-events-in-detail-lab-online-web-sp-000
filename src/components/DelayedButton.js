// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  whenDelayed = (event) => {
    setTimeout(() => {
      this.props.onDelayedClick(event)
      event.persist()
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.whenDelayed}>Delay</button>
    )
  }

}