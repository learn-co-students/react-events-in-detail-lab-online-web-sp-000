import React, {Component} from 'react';

class CoordinatesButton extends Component {
    constructor(props) {
        super()
    }
    
    coordinatesClick = (event) => {
        // console.log('this', this)
        // console.log('event.clientY', event.clientY)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return <button onClick={this.coordinatesClick}>Coordinates</button>
    }

}

export default CoordinatesButton
