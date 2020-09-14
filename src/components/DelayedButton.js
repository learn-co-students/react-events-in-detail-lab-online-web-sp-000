
import React, { Component} from 'react'

export default class DelayedButton extends Component {

    handleClick = (e) => {
        e.persist()
        console.log(this.props.delay)
        console.log(this.props.onDelayedClick)
        let click = this.props.onDelayedClick(e)

        setTimeout(() => {click}, this.props.delay)
        
    }

    render(){

        return(
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}