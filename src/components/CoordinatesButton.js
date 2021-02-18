// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    

    handleOnClick = (event) => {
        console.log(event)
        return this.onReceiveCoordinates = [event.clientX, event.clientY];
        
    }
    
    render(){
        return <button onClick = {this.handleOnClick} ></button>
    }
}

export default CoordinatesButton;