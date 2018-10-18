import React, { Component } from 'react';
import JsxChildrenFunctions from './topics/JsxChildrenFunctions';
import './App.css';
import logo from './logo.svg'

const Header = () =>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Functions as Children</h1>
  </header>

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Header />
      <div className="App">
        <div style={{ float: 'left' }}>
          <button> Hi </button>
        </div>
        <div style={{ float: 'left' }}>
          <JsxChildrenFunctions />
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
