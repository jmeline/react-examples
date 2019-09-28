import React from 'react';
import logo from './images/torchlight_2_icon.png';
import './App.css';

const App = () => (
  <>
    <img alt="logo" height="250" src={logo} />
    <div className="container">
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
      <div>item 5</div>
    </div>
  </>
);

App.propTypes = {

}

export default App;
