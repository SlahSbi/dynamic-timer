import React from 'react';
import './App.css';
import Timer from './timer';

let time=5000000000000000;
function App() {
  return (<div className="App">
    <Timer a={time} />
  </div>

  )
}

export default App;
