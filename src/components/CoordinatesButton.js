import React, { Component } from "react";
import { debug } from "util";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
    this.onReceiveCoordinates = props.onReceiveCoordinates;
    // this.state = { :  }
  }

  render() {
    return (
      <button
        onClick={event =>
          this.onReceiveCoordinates([event.screenX, event.screenY])
        }
      >
        BUTTON
      </button>
    );
  }
}
