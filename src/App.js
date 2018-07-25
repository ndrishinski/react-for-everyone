import React, { Component } from 'react';
import ContactsList from './components/newcontacts.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    );
  }
}

export default App;
