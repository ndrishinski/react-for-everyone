import React, { Component } from 'react';
import ContactsList from './components/contacts.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact List</h1>
        <ContactsList />
      </div>
    );
  }
}

export default App;
