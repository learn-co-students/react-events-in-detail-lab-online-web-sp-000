import React from 'react'

class CoordinatesButton extends React.Component {

  handleCoords = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  };

  render(){
    return (
        <button onClick={this.handleCoords}>
        Coordinates
        </button>
    )
  }
}

export default CoordinatesButton;
