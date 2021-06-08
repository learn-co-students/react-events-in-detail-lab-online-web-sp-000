// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor() {
        super()
        this.state = {
          
        } 
      }
      clickHandle = (e) =>{
        const coordinate = [e.clientX,e.clientY]
        this.props.onReceiveCoordinates(coordinate)

      }


      render() {
        return (
          <div>
             <button onClick={this.clickHandle} >Click me</button>
          </div>
        )
      }
      
}
