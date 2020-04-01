import React, {Component} from 'react'

class DelayedButton extends Component{

    handleClick=(event) => {

        event.persist()

        const onTimeout = () => {
            this.props.onDelayedClick(event)
        }
        
        setTimeout(onTimeout, this.props.delay)

    }
    
    render(){
        return(
            <button
                onClick={this.handleClick}
            >
                Delayed Button
            </button>
        )
    }
}

export default DelayedButton