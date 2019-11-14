// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist();
        setTimeout(() => {
            //pass the event to the onDelayedClick prop
            this.props.onDelayedClick(event);
         }, this.props.delay);
     }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delay</button>
            </div>
            )
      }

}
