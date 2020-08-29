// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    constructor(props) {
        super()
        this.onDelayedClick = props.onDelayedClick()
        this.delay = props.delay
    }

    render() {
        return (
            <button>
            {/* //onClick={setTimeout(this.delay), this.onDelayedClick(event.clientX, event.clientY)}> */}

            </button>
        )
    }


}