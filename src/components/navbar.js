import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import image from '../images/sized_image.svg'

class MyNavbar extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="transparent" expand="lg">
      <img
      alt=""
      src={image}
      width="60"
      height="60"
      className="navbar-icon"
      />
        <Navbar.Brand href="">
          {'JSYC'}
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default MyNavbar
