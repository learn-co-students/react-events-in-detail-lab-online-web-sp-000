import React from 'react';

class CoordinatesButton extends React.Component{
    clickHandler = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };

    render() {
        return (
           <div>
               <button button onClick={this.clickHandler}>
                   Coordinates Button
               </button>
           </div>
        );
    }    
}

export default CoordinatesButton;

