// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           array: null
        }
    }

    render(){
        return(
            <button onClick={ (event) => { this.setState({array: [event.clientX, event.clientY]}); this.props.onReceiveCoordinates(this.state.array)
            }}> </button>

        )
    }

}