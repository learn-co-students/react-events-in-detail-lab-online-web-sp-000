import React from "react";

export default class DelayedButton extends React.Component {
  delay = e => {
    setTimeout(() => {
      e.persist(), this.props.onDelayedClick(e, this.props.delay);
    });
  };
  render() {
    return <button onClick={this.delay}></button>;
  }
}
