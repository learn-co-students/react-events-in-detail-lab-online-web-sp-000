// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {

  handleOnClick = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
    return(
      <button onClick={this.handleOnClick} />
    )
  }
}