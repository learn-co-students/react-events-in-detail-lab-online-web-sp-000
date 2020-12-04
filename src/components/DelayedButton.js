import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

    handleClick = (click) => {
        click.persist();
        this.props.delay
        setTimeout( () => {
            this.props.onDelayedClick(click)
        }, this.props.delay)
        
    }

    render() {
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}