// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
  amazon = (event) => {
    event.persist()
    setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.amazon}>"What's up"</button>
    )
  }
}
