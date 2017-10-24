//BookList.js

import React, { Component } from 'react';
import Impishly from './Impishly';

class BookList extends Component {
    constructor(props) { 
        super(props);
        //gets greeting from impishly
        this.state = { greetings: ['Neuromancer', 'Invisible Cities', "Apples", "New Rose Hotel"] };
    }
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
