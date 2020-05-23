// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  // This component takes in one prop: onReceiveCoordinates. This prop is a function 
  // passed down from index.js. This function is currently just logging whatever is 
  // passed into it.

  handleClick = (event) => {
    let arr = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(arr);
    return arr;
  }
  
  render() {
    return (<div><button onClick={this.handleClick}>Click me; I grab coordinates!</button></div>)
  }
}

// in render of index.js: <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />