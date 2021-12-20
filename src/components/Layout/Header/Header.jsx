import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import Logo from "../../../assets/images/caabLogo.png";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const title = (
    <span>
      <img src={Logo} alt="Main Logo" className="logo" />
      User Name{" "}
      <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000" }} />
    </span>
  );

  const profile = (
    <span>
      <FontAwesomeIcon icon={faUserCircle} style={{ color: "#0979F9" }} />
      Profile
    </span>
  );

  const logOut = (
    <span>
      <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#0979F9" }} />
      Logout
    </span>
  );

  return (
    <Navbar className="navbar-bg" expand="md">
      <Navbar.Brand href="#">
        <img src={Logo} alt="Main Logo" className="logo" />
        Civil Aviation Authority of Bangladesh
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title={title} id="basic-nav-dropdown">
            <NavDropdown.Item href="#">{profile}</NavDropdown.Item>
            <NavDropdown.Item href="#">{logOut}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
