import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component{

    onClickEvent = (event) => {
         this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render(){
        return(
            <div>
                <button onClick={this.onClickEvent}>Coordinates</button>
            </div>
        )
    }
}