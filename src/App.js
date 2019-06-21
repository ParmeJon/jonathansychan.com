import React from 'react';
import temp from './images/JonSY2.jpg';
import MyNavbar from './components/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="App-header">
        <img src={temp} className="App-logo" alt="logo" />
        <p>
          <i>jonathansychan.com</i> is currently under construction.
        </p>
        <div className="external-links">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/jonathansychan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            className="App-link"
            href="https://www.youtube.com/jonsyvids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
