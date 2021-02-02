import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    render() {
        return(
            <div>
                {/* {this.props.onReceiveCoordinates()} */}
                <button onClick={this.props.onReceiveCoordinates(e => console.log(e.clientX, e.clientY))}></button>
            </div>        
        )
    }
}
