import React from 'react';

export default class DelayedButton extends React.Component {
    constructor(props) {
        super(props)
    }

    delayClick = (event) => {
        console.log("clicked")
        event.persist()
        setTimeout(() => { //sets function after waiting, anotheroption is setInterval
          this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (<button 
            onClick={this.delayClick}
        >
        </button>
        )}
}
