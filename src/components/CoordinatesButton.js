import React, { Component } from 'react'

class DelayedButton extends Component{

    render(){

        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinate Button</button>
        )
    }
}

export default DelayedButton
