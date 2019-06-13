// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButtonComponent extends Component {
    coordinates = (e) => {
        e.persist();
        setTimeout(() => {
        this.props.onDelayedClick(e);
    }, this.props.delay);
       }
     render() {
       return (
         <button onClick={this.coordinates}> Click </button>
       
       );
     }
  }
  
  export default DelayedButtonComponent;