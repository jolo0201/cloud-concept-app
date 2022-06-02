import React, { Component } from 'react';
import {  Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

export default class NavbarComponents extends Component {
  render() {
    return (
        <div>
            <Navbar bg='primary' variant='dark' sticky='top' expand='md'>
              <Container>
              <Navbar.Brand>
                  Wikireadme
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link  as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link  as={Link} to={"/cloud"}>Cloud Infrastracture Fundamentals</Nav.Link>
                        <Nav.Link  as={Link} to={"/aws"}>AWS Global Infrastracture</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
                
            </Navbar>
            <Outlet />
      </div>
    )
  }
}
