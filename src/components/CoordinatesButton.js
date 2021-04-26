import React, { Component } from "react"

export default class CoordinatesButton extends React.Component{
    
    coordinates = (event) =>{
        let c = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(c)
    }
    
    render(){
        return(
            <button onClick={this.coordinates}></button>
        )
    }


}