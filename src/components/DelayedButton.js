import React, { Component } from 'react';

export default class DelayedButton extends Component {

    constructor(props) { // Create our constructor that accepts the props.
        super(props);
    }

    withoutDelay = (event) => {
        event.persist() // We make the event persistent

        const delay = this.props.delay // We define variables for our props, just to make things easier.
        const onDelayedClick = this.props.onDelayedClick(event)

        setTimeout(
            () => onDelayedClick, delay // Insert our props into setTimeout, creating a function for our first argument.
        )
        
    }

    render () {
        return (
            <button onClick={this.withoutDelay}></button> // On user click, we will run withoutDelay.
        )
    }

}
