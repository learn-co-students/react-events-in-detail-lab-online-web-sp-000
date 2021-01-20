// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
	eventData = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return (<button onClick={this.eventData}>CoordinatesButton</button>)
	}
}

export default CoordinatesButton;