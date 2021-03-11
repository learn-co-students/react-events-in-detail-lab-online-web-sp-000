import React, {Component} from 'react' 

export default class CoordinatesButton extends Component {
    setPosition = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    };
    
    render() {
        return (
            <button onClick={this.setPosition}></button>
        )
    }
}