import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withProps } from 'recompose';

const HeaderComponent = ({ logo }) =>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Recompose</h1>
  </header>;

const Header = withProps({ logo })(HeaderComponent);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
