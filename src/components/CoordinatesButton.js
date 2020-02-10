import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  
  render() {
    return (
      
      <div><button onClick={this.clickHandler} /></div>
    )
  }
  
}
