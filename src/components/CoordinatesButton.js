import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  myCoordinatesArray = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.myCoordinatesArray}>This is a button</button>
    )
  }

}
