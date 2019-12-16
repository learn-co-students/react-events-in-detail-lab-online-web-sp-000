// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  callback = (e) => {
    e.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, e);
  }

  render() {
    return(
      <button onClick={this.callback}>Delay</button>
    )
  }
}
