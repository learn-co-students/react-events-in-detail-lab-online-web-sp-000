// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    //start here
    handleOnClick = (event) => {
        console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            //start here
            <button onClick={this.handleOnClick}></button>
        )
    }
}
export default CoordinatesButton