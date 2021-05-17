// Code DelayedButton Component Here
import React , { Component} from 'react'
export default class DelayedButton extends Component{
    handleClick = () => {
        setTimeout(this.props.onDelayedClick, this.props.delay)
    }
    render(){
        return(
            <div>
                <button onClick= {this.handleClick}></button>
            </div>
        )
    }
}
 
 
 
