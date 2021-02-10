import React, {Component} from 'react'

export default class CoordinatesButton extends React.Component {

    handleCoords = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button value='Coordinates' onClick={this.handleCoords}/>
        )
    }
}
