import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  }

  render() {
    return (
      <button onClick={this.handleClick}>My delayed button</button>
    )
  }
}
