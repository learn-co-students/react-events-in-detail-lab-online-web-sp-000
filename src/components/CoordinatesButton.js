
import React, { Component } from 'react'

class CoordinateButtonComponent extends Component {
    coordinates = (e) => {
       const coordArray = [e.clientX, e.clientY]
       this.props.onReceiveCoordinates(coordArray);
      }
    render() {
      return (
        <button onClick={this.coordinates}> Click </button>
      
      );
    }
  }
  
  export default CoordinateButtonComponent;