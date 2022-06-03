import React, { Component } from 'react';
import {  Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class NavbarComponents extends Component {
  render() {
    return (
        <div>
            <Navbar bg='light' variant='light' sticky='top' expand='md'  >
              <Container className="justify-content-center">
              <Navbar.Brand>
                  wikireadme
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
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
