import React, {Component} from 'react'

class CoordinatesButtons extends Component{

    handleClick = (event) =>{
        const coord = [event.screenX, event.screenY]
        this.props.onReceiveCoordinates(coord)
    }
    
    render(){
        return(
            <button
                onClick={this.handleClick}
            ></button>
        )
    }
}

export default CoordinatesButtons
