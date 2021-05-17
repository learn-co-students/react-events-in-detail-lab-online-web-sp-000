// Code CoordinatesButton Component Here
import React , { Component} from 'react'
export default class CoordinatesButton extends Component{
 
    handleClick = (event) => {
        let cords = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(cords)
    }

    render(){
        return(
            <div>
                <button onClick= {event => this.handleClick(event)}></button>
            </div>
        )
    }
}
