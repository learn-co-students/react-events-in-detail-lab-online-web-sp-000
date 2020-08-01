import React, {Component} from 'react'


class CoordinatesButton extends Component {

  locate = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.locate}>Locate</button>
    )
  }
}

export default CoordinatesButton
