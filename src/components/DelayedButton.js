// DelayedButton.js
import React, { Component } from 'react';

class DelayedButton extends Component {
	callback = (event) => {
		// here the event properties are NOT null,
		// the event isn't yet returned to the pool.
		event.persist()

		setTimeout(() => {
			// here the event properties are null,
			// the event is returned to the pool.
      this.props.onDelayedClick(event);
    }, this.props.delay);
	}

	render() {
		return (<button onClick={this.callback}>DelayedButton</button>)
	}
}

export default DelayedButton;