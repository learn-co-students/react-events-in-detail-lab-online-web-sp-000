import React, { Component } from "react";

export default class DelayedButton extends React.Component {

    click = (event) =>{
        event.persist();
        this.props.delay
        setTimeout( () =>{
            this.props.onDelayedClick(event)
            }, this.props.delay
        )
    }

    render(){
        return(
            <button onClick={this.click}></button>
        )
    }
}