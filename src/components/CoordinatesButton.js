import React, {Component} from 'react';

class CoordinatesButton extends Component {
    handleClick = (e) => {
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return (
            <button onClick={this.handleClick}>Mouse Coordinates</button>
        )
    }
}

export default CoordinatesButton;