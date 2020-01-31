// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {
    //start here
    handleClick = (event) => {
        event.persist(); //To log the asynchronous info to the console.
        // Create a button that, when clicked, will pass the click event to the onDelayedClick prop
        //within a setTimeout(). The setTimeout() should be set to this.props.delay.
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    render() {
        return (
            //start here
            <button onClick={this.handleClick}></button>
        )
    }
}
export default DelayedButton