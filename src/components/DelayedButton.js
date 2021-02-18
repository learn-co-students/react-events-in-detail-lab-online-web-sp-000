// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {

    onDelayClick = (delay) => {

    }

    render(){
        return <button onDelayClick = {this.handleOnClick} ></button>
    }
}
export default DelayedButton;