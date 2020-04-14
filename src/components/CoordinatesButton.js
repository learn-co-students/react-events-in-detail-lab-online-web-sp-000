import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
    }

    getCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button 
            onClick={this.getCoordinates}>
            </button>
        )
    }
}
