import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    let coordinates = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates Button...</button>
    )
  }
}

export default CoordinatesButton;
