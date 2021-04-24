// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    clickHandler = (e) => {
        let coords = [e.clientX, e.clientY]
        {this.props.onReceiveCoordinates(coords)}
    }
    render(){
        return(
            <button onClick={this.clickHandler}></button>
        )
    }
}