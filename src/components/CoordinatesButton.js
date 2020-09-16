import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
this.props.onReceiveCoordinates([ e.screenX, e.screenY])
    }
    
    
    render () {
       
return (
    <div>
        <button onClick = {this.handleClick}>Coordinates</button>
    </div>
)
    }
}
