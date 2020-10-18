import React from 'react';

// Class Component -always use-

/* class MyComponent extends React.Component {

} */

// Function Component 
// React custom components always start with capital letter 
// If you start with small letter, React will try to interpret as a HTML tag
function IAmAH1() {
  return <h1>Wow this is so cool!</h1> // if you writing in multiline always use ()
}


function App() {
  return (
    <IAmAH1 />
  );
}

export default App;
