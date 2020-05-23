// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
    handleClick = (event) => {
        event.persist()
        // setTimeout(this.props.onDelayedClick(e), this.props.delay)
        this.props.onDelayedClick(event)
    }

    render () {
        return (
           <button onClick={this.handleClick}></button>
        )
    }
}