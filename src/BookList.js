//BookList.js

import React, { Component } from 'react';
import Impishly from './Impishly';

class BookList extends Component {
    constructor(props) { 
        super(props);
        //gets greeting from impishly
        this.state = { greetings: ['Neuromancer', 'Invisible Cities', "Half Magic", "Calvin and Hobbes", "XKCD", "Jane Eyre", "New Rose Hotel"] };
    }

//for React to know which element to modify/remove/etc when one of 
//the elements in your list changes, it has to be able to uniquely 
//identify which element it is, so here we’re specifying the key as the book.

renderGreetings() {
  return this.state.greetings.map(book => (
    <Impishly key={book} book={book}/>
  ));
}
  render() {
    return (
        <div className="BookList">
            {this.renderGreetings()}
        </div>
    );
  }
}
export default BookList;
