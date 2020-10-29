// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        event.persist()
        //const target = event
        //debugger
        //this.props.onDelayedClick(event)
        debugger
        this.props.onDelayedClick(event)
        //setTimeout(this.props.onDelayedClick(event), this.props.delay)
        return this
    }

    render () {
        return (
            <button onClick={this.handleClick}>Delay Button</button>
        )
    }
}