import React from 'react';

export default class DelayedButton extends React.Component {

// constructor(props) {
//     super()
//     this.onDelayedClick = props.onDelayedClick
//     this.delay = props.delay
// }


handleClick = event => {
    event.persist();
setTimeout(() => {
    this.props.onDelayedClick(event)
}, this.props.delay);
}

render() {
    return <button onClick={this.handleClick}>Delayed</button>
}

}
