import React, { Component } from "react";

export default class DelayedButton extends Component {

  delayedClickEvent = (e) => {
    e.persist()
    window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayedClickEvent}>Delayed Button</button>
    )
  }
}