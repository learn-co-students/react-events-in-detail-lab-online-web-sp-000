// Code DelayedButton Component Here
import React, { Component } from 'react';
//import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class DelayedButton extends Component {

    handleClick = event => {
        event.persist();
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };

    render() {
        return (
        <button onClick={this.handleClick}></button>
        )
    }
}