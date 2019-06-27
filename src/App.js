import React from 'react';
import temp from './images/JonSY2.jpg';
import me from './images/sized_image.svg';
import Icons from './components/icons'
import MyNavbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="main">
        <div className="main-content">
          <div className="main-words">
          <h1 className="main-title">Jonathan</h1>
          <h1 className="main-title"> SY </h1>
          <h1 className="main-title">Chan</h1>
          <p> <i className="main-description">an always learning full stack developer</i></p>
          </div>
          <div className="image-container">
          <img src={me} className="me-icon" alt="main"/>
          </div>
        </div>
        </header>
        <Icons/>
    </div>
  );
}

export default App;
