// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component { //create react component

    //takes in one prop oneReceiveCoordinates 
    //function passed down from index.js
    handleClick = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    //render a button 
    //on click of the button, create array with 2 elements
    render(){
        return(
             <div>
                <button onClick={e => this.handleClick(e)}></button>
            </div>
        )
    }
}

export default CoordinatesButton 