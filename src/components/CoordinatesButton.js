import React from 'react';
import ReactDOM from 'react-dom';

export class CoordinatesButton extends React.Component {

    onClickHandle = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <button onClick={ this.onClickHandle } > COORDINATES </button>
        )
    }
}

export default CoordinatesButton;