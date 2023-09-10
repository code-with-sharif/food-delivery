import React from "react";
import "../Styles/Menue.css";
import { Nav, NavLink } from "react-bootstrap";
import All from "./All";

function Menue() {
  return (
    <>
      <h1 className="heading">our menu</h1>

      <Nav className="menu-container mb-4">
        <NavLink
          className="menulink"
          exact
          to="/"
          activeClassName="active-link"
        >
          All
        </NavLink>
        <NavLink
          className="menulink"
          to="/burger"
          activeClassName="active-link"
        >
          Burger
        </NavLink>
        <NavLink className="menulink" to="/pizza" 
        activeClassName="active-link">
          Pizza
        </NavLink>
        <NavLink className="menulink" to="/pasta" 
        activeClassName="active-link">
          Pasta
        </NavLink>
        <NavLink className="menulink" to="/fries"
         activeClassName="active-link">
          Fries
        </NavLink>
      </Nav>

      <All />
    </>
  );
}

export default Menue;
