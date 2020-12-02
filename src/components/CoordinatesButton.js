import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render() {
        console.log(this.props.onReceiveCoordinates.bind(this))
        return (
            <div>
                <button onClick={this.props.onReceiveCoordinates}></button>
            </div>
        )
    }
}
