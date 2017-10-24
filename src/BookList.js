//BookList.js

import React, { Component } from 'react';
import Impishly from './Impishly';

class BookList extends Component {
  render() {
    return (
        <div className="BookList">
            <Impishly book="Neuromancer"/>
            <Impishly book="Invisible Cities"/>
            <Impishly book="Half Magic"/>
            <Impishly book="Jane Eyre"/>
        </div>
    );
  }
}
export default BookList;
