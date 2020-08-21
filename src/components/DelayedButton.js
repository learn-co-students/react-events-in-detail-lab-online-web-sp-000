import React, { Component } from 'react';

export default class DelayedButton extends Component {
    on_click = (event) => {
        // let e = event
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
    render() {
        return (
            <div><button onClick={this.on_click}>DELAYED_BUTTON</button></div>
        )
    }
}
