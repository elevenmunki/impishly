//App.js

import React from 'react';
import './App.css';
import Impishly from './Impishly';


//const app (takes no argument)
//returns Impishly component 
const App = () => {
  return (
    <div className="App">
      <Impishly book="Neuromancer"/>
      <Impishly book="Invisible Cities"/>
      <Impishly book="Half Magic"/>
      <Impishly book="Jane Eyre"/>
    </div>
  );
};

export default App;
