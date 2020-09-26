// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component { //react component

    //two props: onDelayedClick and delay
    //button when clicked will pass event to prop within set timeout
    handleClick = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    //should be logged to the console

    render(){
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default DelayedButton 