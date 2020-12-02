import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = event => {
        console.log(event)
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
