// Code DelayedButton Component Here
import React from 'react' 

export default class DelayedButton extends React.Component{

    delayed_event = (e) => {
        e.persist()
        setTimeout(() => { this.props.onDelayedClick(e)}, this.props.delay)
       
    }

    render(){
        return(
            <button className="DelayedButton" onClick={this.delayed_event}>DelayedButton</button>
        )
    }
}