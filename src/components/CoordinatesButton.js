import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    const coordinates =  [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.handleClick} style={{ width: '50px', height: '50px'}}></button>
    )
  }
}
