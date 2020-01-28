import React, { Component } from "react";

// Code CoordinatesButton Component Here


export default class CoordinatesButton extends Component{

    handleOnClick = (event) =>{
        console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        return(
            <button onClick={this.handleOnClick}>Coordinates</button>
        )
    }
}

