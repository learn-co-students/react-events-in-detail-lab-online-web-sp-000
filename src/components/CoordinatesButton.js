// Code CoordinatesButton Component Here
import React, { Component } from 'react';

const CoordinatesButton = (props) => {
    console.log(props)
    return <button onClick={(e) => props.onReceiveCoordinates([e.clientX, e.clientY])}>B1</button>
}

export default CoordinatesButton;