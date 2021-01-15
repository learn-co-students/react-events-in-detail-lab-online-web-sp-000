import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

// onReceiveCoordinates = (event) => {
//   console.log(`${[[event.clientX], [event.clientY]]}`)
// }

// onDelayedClick = () => {
//   console.log('p')

//   // setTimeOut(() => { console.log("delayed much")}, 1000)
// }

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
