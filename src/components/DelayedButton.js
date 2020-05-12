// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={(e) => setTimeout(() => {e.persist(); this.props.onDelayedClick(e, this.props.delay)})}></button>
        )
    }

}