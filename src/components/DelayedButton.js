// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {


    render() {
        return (
            <button onClick={ e => {
                e.persist();
                setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
            }
            }>Delayed Click</button>
        )
    }
}

export default DelayedButton