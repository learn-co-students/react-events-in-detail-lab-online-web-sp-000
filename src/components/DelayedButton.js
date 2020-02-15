// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component{

 handleClick = (e) =>{
     e.persist()
     setTimeout(this.props.onDelayedClick(e), 3000)
 }

  render(){
    return (
    <button onClick = {this.handleClick}>hehe button</button>
    )
  }
}

export default DelayedButton

