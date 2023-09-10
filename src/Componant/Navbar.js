import React from "react";
import { Col, Row, Navbar, Container, Nav } from "react-bootstrap";
import "../Styles/header.css"; // Import the CSS file
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar className="bgcolor" expand='lg'>
            <Container>
              <NavLink to="/home" className="text-center">
                <h2>Fean</h2>
              </NavLink>
              <Navbar.Toggle aria-controls='my-nav' />
              <Navbar.Collapse id='my-nav'>
                <Nav className="mainnav">
                  <NavLink to="/home"> Home</NavLink>
                  <NavLink to="/about"> About</NavLink>
                  <NavLink to="/menue"> Menue</NavLink>
                  <NavLink to="/booktable"> booktable</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default MyNavbar;
