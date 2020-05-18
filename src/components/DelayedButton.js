import React, { Component } from 'react';

export class DelayedButton extends Component { 
    
    handleClick = (event) => {
        event.persist()
        const savedEvent = event
        setTimeout(() => this.props.onDelayedClick(savedEvent), this.props.delay)
     }
  
     render() {
        return (
           <div>
             <button onClick={this.handleClick}>Delayed Clicker!</button> 
           </div>
        );
     }
  }



export default DelayedButton;
