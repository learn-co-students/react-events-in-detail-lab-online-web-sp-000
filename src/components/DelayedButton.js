import React, {Component} from 'react';

class DelayedButton extends Component {
    
    constructor(props) {
        super()
        this.delayedClick = this.delayedClick.bind(this)
    }

    // delayedClick = (event) => {
    //     event.persist()
    //     setTimeout(() => {
    //         this.props.onDelayedClick(event)
    //     }, this.props.delay)
    // }

    delayedClick(event) {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    delayedClick(event) {
        event.persist()
        setTimeout(function() {
            this.props.onDelayedClick(event)
        }.bind(this), this.props.delay)
    }

    render() {
        return <button onClick={this.delayedClick}>Delayed</button>
    }
}

export default DelayedButton