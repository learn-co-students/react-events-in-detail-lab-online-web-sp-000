import React, { Component } from 'react';

export default class DelayedButton extends Component {


 handleClick = (event) => {
    event.persist();
    const eventSaver = this.props.onDelayedClick(event);
	const eventDelayer = this.props.delay;
    setTimeout(() => eventSaver, eventDelayer)  
  }

  render() {
    return (
      <button onClick={this.handleClick}> Clickamee Delay </button>
    );
  }
}