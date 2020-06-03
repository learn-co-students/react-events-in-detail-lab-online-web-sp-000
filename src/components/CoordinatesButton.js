import React from "react";

export default class CoordinatesButton extends React.Component {
  callback = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <button className="coordinateButton" onClick={this.callback}></button>
    );
  }
}
