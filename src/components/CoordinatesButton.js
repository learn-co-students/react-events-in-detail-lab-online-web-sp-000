import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}