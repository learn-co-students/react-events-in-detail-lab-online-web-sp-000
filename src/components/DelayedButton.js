import React from 'react'

class DelayedButton extends React.Component {
    constructor(props) {
        super(props) // onDelayedClick function & delay (num)
    }

    handleClickEvent = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
            },
            this.props.delay)
    }

    render () {
        return (
            <button onClick={this.handleClickEvent}/>
        )
    }
}

export default DelayedButton