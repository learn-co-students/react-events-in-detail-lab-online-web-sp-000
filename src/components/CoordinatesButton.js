import React, { Component } from 'react';

class CorrdinatesButton extends Component {

  clickedEventHandler =(event)=> {
    console.log("clicked",event.clientX,event.clientY)
let array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    console.log("corrds", this.props.onReceiveCoordinates)
    return (
      <div>

        <button onClick={this.clickedEventHandler}>Submit</button>
      </div>
    );
  }

}

export default CorrdinatesButton;// Code CoordinatesButton Component Here
