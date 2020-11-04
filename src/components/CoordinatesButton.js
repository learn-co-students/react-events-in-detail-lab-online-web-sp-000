import React, { component } from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let coordinates = [event.clientX, event.clientY];
    return this.props.onReceiveCoordinates(coordinates);
  };

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates button</button>
    );
  }
}