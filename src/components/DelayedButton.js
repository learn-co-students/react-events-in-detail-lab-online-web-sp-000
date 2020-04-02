import React, { Component } from 'react'

export default class DelayedButton extends Component {

  delayedClick = (element) => {
    element.persist()
    setTimeout(() => {
      this.props.onDelayedClick(element)
    }, this.props.delay)
  }


  render(){
    return (
      <button onClick={this.delayedClick}>Delayed Button</button>
    )
  }


}
