// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
	clickHandler = (event) => {
		let onDelayedClick = this.props.onDelayedClick
		event.persist()
		setTimeout(function() {onDelayedClick(event)}, this.props.delay)
	}

	render() {
		return(
			<button onClick={this.clickHandler} >DELAYED BUTTON</button>
		)
	}
}


export default DelayedButton