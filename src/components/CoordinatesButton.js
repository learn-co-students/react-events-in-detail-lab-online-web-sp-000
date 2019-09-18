import React from "react";

class CoordinatesButton extends React.Component {

	handleClick = (event) => {
		const coordinates = [event.clientX, event.clientY];
		this.props.onReceiveCoordinates(coordinates);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}></button>
			</div>	
		);
	};

}

export default CoordinatesButton;
