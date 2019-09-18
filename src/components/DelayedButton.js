import React from "react";

class DelayedButton extends React.Component {

	handleClick = (event) => {
		event.persist();
		setTimeout(this.props.onDelayedClick, this.props.delay, event);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}></button>
			</div>	
		);
	};

}

export default DelayedButton;
