// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
  handleClick = e => {
    e.persist()
    const callback = ev => this.props.onDelayedClick(e)
    setTimeout(callback, this.props.delay)
  }
  render () {
    return <button onClick={this.handleClick} />
  }
}

export default DelayedButton
