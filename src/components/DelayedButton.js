// // Code DelayedButton Component Here
// import React from 'react'

// class DelayedButton extends React.Component {

//     handleClick = (event) => {
//         event.persist()
//         setTimeout((event) => this.props.onDelayedClick(event), this.props.delay)
//     }

//     render () {
//         return (
//             <button onClick={this.handleClick}>I am the DelayedButton</button>
//         )
//     }
// }

// export default DelayedButton

import React from 'react';

class DelayedButton extends React.Component {
    handleClick = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return <button onClick={this.handleClick}>I am the Delayed Button</button>;
    }
}

export default DelayedButton


