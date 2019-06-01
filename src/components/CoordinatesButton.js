import React, { Component } from 'react';

class CoordinatesButton extends Component {

   handleMouse = (event) => {
       let x = event.clientX
       let y = event.clientY
       this.props.onReceiveCoordinates([x,y])
   }
    
    render() { 
        return(
             <div>
            <button onClick= {this.handleMouse}>Coordinates</button>
        </div>
        )
    }
}
 
export default CoordinatesButton;
