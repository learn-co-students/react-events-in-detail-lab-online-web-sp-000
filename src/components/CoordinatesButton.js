// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  coordinates = (e)=> {
    const array = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(array)
  }
  render(){
    return (
      <button onClick={this.coordinates}>Coordinates</button>
    )
  }
}
