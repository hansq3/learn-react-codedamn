import React from 'react';

function App() {

  function buttonWasClicked(event) {
    console.log(event.target)
    // alert('I was clicked!')
  }

  return (
    <div>
      <button onClick={buttonWasClicked}>Button</button>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
