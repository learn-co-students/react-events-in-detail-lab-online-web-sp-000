// Code CoordinatesButton Component Here
import React,{Component} from 'react'

class CoordinatesButton extends Component{

  handleClick = (e) =>{
    let coordinates = [e.clientX, e.clientY]
    return this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return (
      <button onClick = {this.handleClick}>XY button</button>
    )
  }

}

export default CoordinatesButton

