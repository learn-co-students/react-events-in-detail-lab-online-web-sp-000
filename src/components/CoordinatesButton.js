// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    clickHander = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    render= () => <button onClick={this.clickHander}></button>;
}