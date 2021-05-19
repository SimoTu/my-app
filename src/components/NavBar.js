import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Navbar.Brand href="">Harjoitus</Navbar.Brand>
        <ul className="navbar-nav ml-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Postaukset{" "}
            </Link>
          </li>
          <li>
            <Link to={"/NotPosts"} className="nav-link">
              Albumit
            </Link>
          </li>
        </ul>
      </Navbar>
    );
  }
}

export default NavBar;
