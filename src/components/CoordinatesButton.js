import React from 'react';

export default class KeyPad extends React.Component {
    
    handleClick = (e) => {
        const coordsArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordsArray)
    } 


    render() {  
      return (
        <button onClick={this.handleClick}>Coordinates</button>
      );
    }
  }
