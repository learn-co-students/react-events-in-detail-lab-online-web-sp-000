import React, {Component} from 'react';

export default class DelayedButton extends Component {
    delayButton = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.delayButton}>On Delay Button
            </button>
        )
    }
}