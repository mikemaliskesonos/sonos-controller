import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import AppBar from './appBar';

import './header.css';

const Header = () => (
  <Navbar className="navbar-danger-mouse" expand="lg" variant="dark">
  <Navbar.Brand href="/" className="mist">
    Sonos
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navbar-danger-mouse">
      <Nav.Link href="/sonos/">Controls</Nav.Link>
      <Nav.Link href="/shortcuts/">Shortcuts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
