// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        // onReceiveCoordinates.preventDefault()
        // let args = (onReceiveCoordinates.clientX, onReceiveCoordinates.clientY);
        // console.log(args)
    }
    
    render(){
        return <button onClick = {this.handleClick} ></button>
    }
}

export default CoordinatesButton;