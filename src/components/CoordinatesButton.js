import React from 'react';

const CoordinatesButton = ( props ) => {
  return (
    <button onClick={(e) => {
      let coordinatesArray = [];
      coordinatesArray.push(e.clientX, e.clientY);
      props.onReceiveCoordinates(coordinatesArray);
    }}>CoordinatesButton</button>
  );
}

export default CoordinatesButton;
