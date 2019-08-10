import React, {Component} from 'react';

export default class DelayedButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    setTimeout(function(){this.props.onDelayedClick(e);}.bind(this), this.props.delay)
    e.persist();
  }
  render(){
    return(<button onClick={this.handleClick}></button>)
  }
}
