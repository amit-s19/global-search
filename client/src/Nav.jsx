import React from 'react';
import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return(
      <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Global Search</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dash1">Dashboard1 </Nav.Link>
          <Nav.Link href="/dash2">Dashboard2 </Nav.Link>
          <Nav.Link href="/dash3">Dashboard3 </Nav.Link>
        </Nav>
      </Navbar>
      {/* <Popup isOpen={isPopupOpen} items={foundData} /> */}
      </>
    );
  }
}


export default Navigation;