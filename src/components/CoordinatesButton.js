// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      coordinates: []
    }
  }

  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  render () {
    return <button onClick={this.handleClick} />
  }
}

export default CoordinatesButton
