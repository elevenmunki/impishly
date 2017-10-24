//App.js

import React from 'react';
import './App.css';
import BookList from './BookList';

//const app (takes no argument)
//returns BookList component 
const App = () => {
  return (
    <div className="App">
      <BookList/>
    </div>
  );
};

export default App;
