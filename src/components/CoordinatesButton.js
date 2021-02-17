// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    

    handleOnClick = () => {
        let arr = onReceiveCoordinates();
        return arr;
    }
    
    render(){
        return <button onClick = {this.handleOnClick} ></button>
    }
}

export default CoordinatesButton;