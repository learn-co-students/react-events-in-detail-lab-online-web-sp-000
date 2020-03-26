import React from 'react'

export default class DelayedButton extends React.Component {

    constructor() {
        super()
    }

    delayHandler = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);

    }

    render() {
        return (
            <button onClick={this.delayHandler}>Delayed</button>
        )
    }
}
