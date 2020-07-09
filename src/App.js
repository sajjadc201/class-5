import React, { useState }from 'react';
import Parent from './Parent';
import {realContext} from './MyContext';
import './App.css';

function App() {
  let updateState = useState(1);
  return (
    <realContext.Provider value = {updateState}>
      <div>
        <Parent />

      </div>
    </realContext.Provider>
  );
}

export default App;
