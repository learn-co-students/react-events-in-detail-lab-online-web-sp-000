// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

e_coords = (e) => {
    e.persist()
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
}

    render(){
        return(
            <button className="CoordinatesButton" onClick={this.e_coords}> CoordinatesButton </button>
        )
    }
}