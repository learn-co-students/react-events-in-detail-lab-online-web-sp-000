import React from 'react'

class CoordinatesButton extends React.Component {
    
    createCoordinatesArray = (event) => {
        const coordinatesArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
        return coordinatesArray 
    } 

    render(){
        return(
            <button onClick={this.createCoordinatesArray}> </button>
        )
    }
}


export default CoordinatesButton;  