import React, { Component } from 'react';

export default class CoordinatesdButton extends Component {

  handleClick = (event) => {
     console.log(event.type); // prints 'click'
     let x = event.clientX
     let y = event.clientY
     let arr = [x, y]
     return this.props.onReceiveCoordinates(arr) 
   }

  render() {

    return (
      <p>
    <button
        onClick = {this.handleClick}> Get Coordinates </button>
    </p>
  )
  }
}
