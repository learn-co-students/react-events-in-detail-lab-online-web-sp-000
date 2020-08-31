// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    delayedFunc = (e) => {
        e.persist();
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)

    }
    
    render () {

        return <button onClick={this.delayedFunc}>Delayed button</button>
    }
}