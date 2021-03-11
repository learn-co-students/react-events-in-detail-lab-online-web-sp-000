import React, {Component} from 'react'

export default class DelayedButton extends Component {
    constructor(props) {
        super()
        this.state = {
            onDelayedClick: props.onDelayedClick,
            delay: props.delay
        }
    }
    delayEvent = (e) => {
        e.persist()
        setTimeout(() => {
           this.state.onDelayedClick(e) 
        }, this.state.delay);
    }


    render() {
        return(
            <button onClick={this.delayEvent}></button>
        )
    }
}
