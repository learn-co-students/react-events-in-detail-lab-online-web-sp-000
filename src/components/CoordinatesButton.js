import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    clickButton = (event) => {
       return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button  onClick={this.clickButton}>Coordinates Button
            </button>
        )
    }
}