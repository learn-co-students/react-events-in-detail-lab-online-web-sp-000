import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickHandler=(e)=>{
    this.props.onReceiveCoordinates([e.clientX,e.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>Coordinates</button>
      </div>
    )
  }
}
