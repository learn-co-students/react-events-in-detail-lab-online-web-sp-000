import React, {Component} from 'react';


export default class CoordinatesButton extends Component {
    
    createCoordinates = (event) => {
        const coordinates = []
        coordinates.push(event.clientX)
        coordinates.push(event.clientY)

        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
        <button onClick={this.createCoordinates}>Button</button>
        )
    }
}
