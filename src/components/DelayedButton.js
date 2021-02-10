import React, {Component} from 'react';

export default class DelayedButton extends React.Component {

    handleDClick = (e) => {
        setTimeout(() => {
            this.props.onDelayedClick(e);
        }, this.props.delay)
        e.persist();
    }

    render(){
        return(
            <button value='Delay' onClick={this.handleDClick} />
        )
    }
}

