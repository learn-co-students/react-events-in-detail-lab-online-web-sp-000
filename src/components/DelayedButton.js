// Code DelayedButton Component Here
import React from 'react';

const DelayedButton = (props) => {
  return (
    <div>
      <button onClick={(event) => {
        event.persist()
        setTimeout(() => props.onDelayedClick(event), props.delay)
      }}>Delayed Button</button>
    </div>
  );
}

export default DelayedButton;
