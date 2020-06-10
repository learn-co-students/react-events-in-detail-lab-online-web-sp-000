import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);
    return array;
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}
