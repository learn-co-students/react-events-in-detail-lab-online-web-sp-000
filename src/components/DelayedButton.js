import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist();
        setTimeout( () => {
            this.props.onDelayedClick(event)
        }, this.props.delay )
    }

    // Notice that when declaring a function, you need to .bind(this) -- otherwise, this.props will be undefined

    // handleClick = (event) => {
    //     event.persist();
    //     setTimeout( function() {this.props.onDelayedClick(event)
    //     }
    //     .bind(this), this.props.delay )
    // }

    render() {
        return(
            <button onClick={ this.handleClick } />
        )
    }

}