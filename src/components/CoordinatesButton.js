// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
	clickHandler = (e) => {
		let array = [e.clientX, e.clientY]
		this.props.onReceiveCoordinates(array)
	}

	render() {
		return(
			<button onClick={this.clickHandler} >COORDS BUTTON</button>
		)
	}
}

export default CoordinatesButton