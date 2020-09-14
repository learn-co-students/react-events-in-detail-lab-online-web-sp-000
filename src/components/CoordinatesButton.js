// Code CoordinatesButton Component Here
import React, { Component} from 'react'

export default class CoordinatesButton extends Component{

    getCoords = (e) => {
         this.props.onReceiveCoordinates([e.clientX, e.clientY])
                   
    }
    render(){
        return(
            <button onClick={this.getCoords}></button>
        )
    }
}