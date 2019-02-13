import React, { Component } from 'react';

class DelayedButton extends Component {

  delayButton =(event)=> {
event.persist()
setTimeout(()=> {
this.props.onDelayedClick(event)
}, this.props.delay)
  }

  render() {
    console.log("delayed",this.props)
    return (
      <div>
<button onClick={this.delayButton}>Submit delay</button>
      </div>
    );
  }

}

export default DelayedButton;// Code DelayedButton Component Here
