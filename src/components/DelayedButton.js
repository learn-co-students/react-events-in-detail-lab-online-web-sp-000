// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  // Create a button that, when clicked, will pass the click event to the onDelayedClick 
  //prop within a setTimeout(). //? The setTimeout() should be set to this.props.delay.

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return <div><button onClick={this.handleClick}>Delayed Button</button></div>
  }
}
