import React from 'react';
import ReactDOM from 'react-dom';

export class DelayedButton extends React.Component {

    onClickHandle = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
    }

    render(){
        return(
            <button onClick={ this.onClickHandle }> DELAYED </button>
        )
    }
}

export default DelayedButton;