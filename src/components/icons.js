import React from 'react';

function Icons() {
  return (
    <div className="external-links">
      <a
        className="linkedin-icon"
        href="https://www.linkedin.com/in/jonathansychan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      {/* <a
        className="youtube-icon"
        href="https://www.youtube.com/jonsyvids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube"></i>
      </a> */}
      <a
        className="github-icon"
        href="https://www.github.com/parmejon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        className="ig-icon"
        href="https://www.instagram.com/parmejondesigns/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        className="iot-icon"
        href="https://parmejon.github.io/Inanimate-Object-Test/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-smile"></i>
      </a>
    </div>
  );
}
export default Icons
