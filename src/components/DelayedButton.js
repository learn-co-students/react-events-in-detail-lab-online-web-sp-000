// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component{

    handleClick = e => {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
 
    }

render(){
    return(
        <div>
            <button
            onClick={this.handleClick}
            >
                 delay button
            </button>
        </div>
    )
}

}