// Code DelayedButton Component Here
import React, { Component } from "react";
export default class DelayedButton extends Component {
  constructor(props) {
    super();
  }
  handleMouseEvent = (e) => {
    e.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, e);
  };

  render() {
    return <button onClick={this.handleMouseEvent}>DelayedButton</button>;
  }
}
