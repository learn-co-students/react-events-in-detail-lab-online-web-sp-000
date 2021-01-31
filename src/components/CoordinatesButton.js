// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinate Button</button>
        )
    }
}