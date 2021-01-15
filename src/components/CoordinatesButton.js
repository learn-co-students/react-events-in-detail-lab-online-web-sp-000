// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(props) {
        super(props)
    }

    // callback = (event) => {
        // let coords = []
        // console.log(`${props.clientX} ${props.clientY}`)
        // coords.push([props.clientX, props.clientY])
    callback = (event) => {
        // return 7
        let coords = []
        // coords.push([event.clientX, event.clientY])
        coords.push(event.clientX)
        coords.push(event.clientY)


        return this.props.onReceiveCoordinates(coords)
    }
        // return (
        //     this.onReceiveCoordinates([[event.clientX], [event.clientY]])
        // )
    // }

    
    render () {
        return (
        <button onClick={this.callback}>Click!</button>
        )
    }
}