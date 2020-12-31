// Code CoordinatesButton Component Here
import React from 'react';

export default class CorrdinatesButton extends React.Component {
    handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };

    render() {
        return <button onClick={this.handleClick}>Coors</button>;
    }
}