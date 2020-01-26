// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (e) => {
        e.persist(); // prevents the event object from returning the pool after firing.

        setTimeout(() => {
            this.props.onDelayedClick(e);
        },  this.props.delay)
    }

    render() {
        return (
            <button onClick={ (e) => this.handleClick(e) }>Delay</button>
        )
    }
}

// How Does This Work?
// <button onClick={this.handleClick}>Delay</button>
// -------------------------------------------------------------
// <button onClick={ (e) => setTimeout(() => this.props.onDelayedClick(e), this.props.delay) }>Delay</button>
