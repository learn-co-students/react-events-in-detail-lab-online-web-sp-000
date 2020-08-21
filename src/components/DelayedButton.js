import React, { Component } from 'react';

export default class DelayedButton extends Component {
    on_click = (event) => {
        let e = event
        setTimeout(this.props.onDelayedClick, this.props.delay, e)
    }
    render() {
        return (
            <div><button onClick={this.on_click}>DELAYED_BUTTON</button></div>
        )
    }
}
