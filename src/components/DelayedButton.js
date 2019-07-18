import React, { Component } from 'react';

export default class DelayedButton extends Component {

  passTheEvent = event => {
    event.persist();
    const cb = this.props.onDelayedClick(event);
    const delay = this.props.delay
    setTimeout(() => cb, delay);
  }

  render() {
    return (
      <button onClick={this.passTheEvent}>I'm another Button!</button>
    )
  }

}
