// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    timedOut = (event) => {
        console.log("e:", event)
        //event.persist();
        let x = event.clientX;
        let y = event.clientY;
        let e = event;
        setTimeout( (e) => {
            console.log("e2:", e)
            this.props.onDelayedClick(e);
        }, this.props.delay)
        
    }

    render(){
        return(
        <button onClick={
            //(event) => this.timedOut(event)
            (event) => { event.persist(); let e = event; setTimeout(() => { console.log("e:", event); this.props.onDelayedClick(event)}, this.props.delay) }
        }></button>
        )
    }
}