import React from "react";

export default class DelayedButton extends React.Component {

    thing = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }


    render() {
        return (
            <button onClick={this.thing}>Button 2</button>
        )
    }
}
