import React from 'react'

class DelayedButton extends React.Component {

  handleDelay = (e) => {
    e.persist();
    setTimeout( () => {this.props.onDelayedClick(e)}, this.props.delay)
  };

  render(){
    return (
      <button onClick={this.handleDelay}>
      Delayed
      </button>
    )
  }
}

export default DelayedButton;
