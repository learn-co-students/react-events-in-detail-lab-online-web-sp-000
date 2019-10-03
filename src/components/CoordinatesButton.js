// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  };

  render () {
    return (
      <button onClick={this.handleClick}>adsf</button>
    )
  }
}
