import React from "react";

export default class DelayedButton extends React.Component {

    blah = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }


    render() {
        return (
            <button onClick={this.blah}>Button 2</button>
        )
    }
}