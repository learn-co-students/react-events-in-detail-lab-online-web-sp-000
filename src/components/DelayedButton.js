import React, { Component } from 'react';

export default class DelayedButton extends React.Component{

    onClickEvent = (event) => {
        event.persist()

        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
    }


    render(){
        return(
            <div>
                <button onClick={this.onClickEvent}>Delay</button>
            </div>
        )
    }
}
