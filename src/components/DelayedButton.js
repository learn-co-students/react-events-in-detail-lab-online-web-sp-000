// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    clickHandler = (e, num) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
            this.props.delay(num)
        })
    }
    
    render() {
        return (
            <button onClick={this.clickHandler}>Delay</button>
        )
    }
}

export default DelayedButton;