// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        const btnArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(btnArr)
    }

    render(){
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }

}

export default CoordinatesButton