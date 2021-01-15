import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

onReceiveCoordinates = (event) => {
  // [[event.clientX], [event.clientY]]
  // console.log(this.props)
  console.log(`${[[event.clientX], [event.clientY]]}`)
  // return [event.clientX, event.clientY]
  // return event
}

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ this.onReceiveCoordinates } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
