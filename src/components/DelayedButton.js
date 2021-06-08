// Code DelayedButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        } 
      }

      clickHandle = (e) =>{
           e.persist()
            setTimeout(()=> {
                let event = e
                this.props.onDelayedClick(event)
            }, this.props.delay)
        
      }


   

      render() {
        return (
          <div>
            <button onClick={this.clickHandle}>Enter</button>
          </div>
        )
      }
}
