import React,  {Component} from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
        this.onReceiveCoordinates = props.onReceiveCoordinates;
    }

    handleClick = (event) => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render () {
        return <button onClick={this.handleClick}></button>
    }


}