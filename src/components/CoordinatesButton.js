// Code CoordinatesButton Component Here
import React from 'react';

const CoordinatesButton = (props) => {
  return (
    <div>
      <button onClick={event => props.onReceiveCoordinates([event.clientX, event.clientY])}>Coordinates Button</button>
    </div>
  );
}

export default CoordinatesButton;
