import React from 'react';
import useFetch from './api/useFetch'
// import logo from './logo.svg';
import './App.css';

function App() {
  const url = "https://api.imgur.com/3/album/t8GnLj7/images"
  const requestBody = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 21244210772e80a0398320f579e1838cd093f089',
      'cache': 'no-cache',
      'mode': 'no-cors',
      'Access-Crontrol-Allow-Origin': '*',
    }
  }
  const { loading, data } = useFetch(url, requestBody)
  return (
    <div className="App">
      <header className="App-header">
        <h3>Tarantula Gallery</h3>
        <h5>is loading? { loading }</h5>
        <h5>{ data } </h5>
      </header>
    </div>
  );
}

export default App;
