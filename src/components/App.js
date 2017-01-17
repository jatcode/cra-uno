import React, { Component } from 'react';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List</h2>
        </div>
        
        <Home />
      </div>
    );
  }
}

export default App;
