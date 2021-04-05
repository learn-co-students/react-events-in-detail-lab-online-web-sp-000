// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    constructor(props) {
        super()
        this.delayedClick = props.onDelayedClick
        this.delay = props.delay
    
    }

    delayClick = (event) => {
        event.persist();
        setTimeout(() => {this.delayedClick(event);}, this.delay)
    }

    render() {
        return (
        <button onClick={this.delayClick}></button>
        )
    }
}