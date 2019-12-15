// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{

    clickHandler = (event) => {
        // let e = this.props.onDelayedClick(event);
        event.persist();
        let f = () => {
            this.props.onDelayedClick(event)
        }
        setTimeout(f, this.props.delay);
    }
    
    render(){
        return(
            <button onClick={this.clickHandler}></button>
        )
    }
}