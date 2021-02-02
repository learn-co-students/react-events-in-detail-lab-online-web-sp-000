import React from 'react';


export default class DelayedButton extends React.Component {

    handleClick= e => {
        // use persist for asynchronous callback functions or "pooling"
        e.persist();
        // note we are seeting setTimeout to this.props.delay
        setTimeout( () => {
            this.props.onDelayedClick(e);}, this.props.delay);
    };

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Delay</button>
            </div>
        )
    }

}
