import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  findXandY = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.findXandY}>Log X and Y</button>
    )
  }

}
