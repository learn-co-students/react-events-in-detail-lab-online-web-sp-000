import React, { Component } from 'react';

export default class DelayedButton extends Component {

  myClick = event => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.myClick}>This is also a button</button>
    )
  }

}
