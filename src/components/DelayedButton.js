// Code DelayedButton Component Here
import React, { Component as com } from 'react';

export default class DelayedButton extends com {

    clickHandler = (event) => {
        event.persist()
        window.setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

   render() {
    return (
        <button onClick={this.clickHandler}></button>
    )
   }
}