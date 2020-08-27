// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
      }

      handleButton = (e) => {
        let mouseCoordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
      }

  render() {
    return (
        <button onClick={this.handleButton} />
    )
  }

}
