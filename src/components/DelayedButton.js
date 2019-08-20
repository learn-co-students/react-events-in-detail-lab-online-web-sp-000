import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(
      function() {
        this.props.onDelayedClick(event);
      }
      .bind(this),
      this.props.delay
    );
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Delayed Button
      </button>
    );
  }
}