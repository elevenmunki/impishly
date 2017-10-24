//BookList.js

import React, { Component } from 'react';
import Impishly from './Impishly';
import AddGreeter from './AddGreeter';


class BookList extends Component {
    constructor(props) { 
        super(props);
        //gets greeting from impishly
        this.state = { greetings: ['Neuromancer', 'Invisible Cities', "Half Magic", "Calvin and Hobbes", "XKCD", "Jane Eyre", "New Rose Hotel"] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
addGreeting(newBook) {
  this.setState({ greetings: [...this.state.greetings, newBook] });
}

removeGreeting(removeBook) {
  const filteredGreetings = this.state.greetings.filter(book => {
    return book !== removeBook;
  });
  this.setState({ greetings: filteredGreetings });
}

//for React to know which element to modify/remove/etc when one of 
//the elements in your list changes, it has to be able to uniquely 
//identify which element it is, so here we’re specifying the key as the book.

renderGreetings() {
  return this.state.greetings.map(book => (
    <Impishly 
        key={book} 
        book={book}
        removeGreeting={this.removeGreeting}/>
  ));
}
  render() {
    return (
        <div className="BookList">
            <AddGreeter addGreeting={this.addGreeting}/>
            {this.renderGreetings()}
        </div>
    );
  }
}
export default BookList;
