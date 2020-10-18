import React, { Component } from 'react';

export default class DelayedButton extends Component {



  handleClick = (event) => {
    event.persist()
     let e = event
     return setTimeout(() => this.props.onDelayedClick(e), this.props.delay).bind;
   }

  render() {
    return (
    <button
        onClick = {
          this.handleClick}

          >
        Click me! </button>
    )
  }
}
