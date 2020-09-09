// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
    delay = (event) => {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
    };
    render = () => <button onClick={this.delay}>Delayed</button>
}