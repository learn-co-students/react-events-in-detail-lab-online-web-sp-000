// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    onDelayedClick = () => {
        // setTimeOut(() => { console.log("delayed much")}, 1000)
        console.log('p')
    }

    render () {
        return <button onClick={this.onDelayedClick}></button>
    }
}