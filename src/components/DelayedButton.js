// Code DelayedButton Component Here
import React, { Component } from 'react';

const DelayedButton = (props) => {
    return <button onClick={(e) => {
        e.persist()
        setTimeout((() => props.onDelayedClick(e)), props.delay)
    }}>B2</button>
}

export default DelayedButton;