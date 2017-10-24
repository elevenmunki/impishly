//AddGreeter.js

import React, { Component } from 'react';
import './AddGreeter.css';

//declare component and create constructor for it
class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingBook: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }
 addGreeting() {
  this.props.addGreeting(this.state.greetingBook);
  this.setState({ greetingBook: '' });
}

  //event handler, everytime input is modified, it will trigger this function
  handleUpdate(event) {
    this.setState({ greetingBook: event.target.value });
  }
render() {
  return (
    <div className="AddGreeter">
      <input
        type="text"
        onChange={this.handleUpdate}/>
      &nbsp;&nbsp;
      <button onClick=
    {this.addGreeting}>Add</button>
    </div>
  );
}

}

export default AddGreeter;