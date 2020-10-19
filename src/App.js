import React from 'react';

// JSX Expressions inside {}
// Valid JSX: null, numbers, HTML, strings, arrays
// if else statement not work - use ternary operator - or JS function map()

const arr = [1,2,3,4,5]

function App() {
  return (
    <h1>Hello World { arr.map(val => <div>{val ** 2}</div>) }</h1>
  );
}

export default App;
