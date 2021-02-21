// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends React.Component {

   constructor(props) {
      super(props);
      this.onReceiveCoordinates = this.props.onReceiveCoordinates;
   }

   handleClick = (event) => {
      event.persist();
      const coordinates = [event.clientX, event.clientY];
      this.onReceiveCoordinates(coordinates);
   }

   render() {
      return (
         <button onClick={this.handleClick}></button>
      )
   }
}

export default CoordinatesButton;