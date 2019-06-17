import React from 'react';
import logo from './logo.svg';
import temp from './JonSY2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={temp} className="App-logo" alt="logo" />
        <p>
          <i>jonathansychan.com</i> is currently under construction.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jonathansychan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </header>
    </div>
  );
}

export default App;
