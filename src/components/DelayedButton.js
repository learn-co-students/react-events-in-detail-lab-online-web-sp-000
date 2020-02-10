import React, { Component } from 'react';

export default class DelayedButton extends Component {
  clickHandler = (event) => {
    event.persist();
    setTimeout(event, this.props.delay);
  }
  
  render() {
    return (
      <div><button onClick={this.props.onDelayedClick} /></div>
      //    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />

    )
  }
  
  
}