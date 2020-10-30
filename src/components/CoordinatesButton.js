// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

	handleClick = (event) => {
		const coords = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(coords)
	}


	render() {
		return(
			<button onClick={this.handleClick}>

			</button>
		)
	}
}

export default CoordinatesButton
