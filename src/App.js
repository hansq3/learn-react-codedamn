import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(5)   // returns array [counter, setCounter]  
                                              // counter - value of current state variable
                                              // setCounter - function which does allows to update are current state

  function buttonWasClicked() {
    //setCounter(2) // whatever value you pass in (2) that value is assigned to you first parameter(counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={buttonWasClicked}>Button</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
