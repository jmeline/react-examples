import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>React Hooks</h3>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Counter />
      </div>
    );
  }
}

export default App;
