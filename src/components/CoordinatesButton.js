import React from "react";


export default class CoordinatesButton extends React.Component {

	xyCoordinates = event => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}

	render(){
		return <button onClick={this.xyCoordinates}>Coords</button>
	}
}