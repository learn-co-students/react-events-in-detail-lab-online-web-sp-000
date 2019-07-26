// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  setCoords = (event) => {
    const coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }
  
  render(){
    return (
      <button onClick={this.setCoords} />
    )
  }
}