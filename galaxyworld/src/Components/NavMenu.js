import React, { Component } from 'react'
import {Link } from "react-router-dom";
import{Navbar, Nav}from 'react-bootstrap'

export default class NavMenu extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Let's have a trip!</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/daysPlanet">Day's Planet</Nav.Link>
              <Nav.Link as={Link} to="/planetsTour">Planets Tour</Nav.Link>
              <Nav.Link as={Link} to="/favPlanets">My Planets</Nav.Link>
            </Nav>
            
          </Navbar>
            
    
          </div>
        )
    }
}
