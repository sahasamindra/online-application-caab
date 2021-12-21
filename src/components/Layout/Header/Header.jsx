import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import Logo from "../../../assets/images/caabLogo.png";
import Notification from "./Notification/Notification";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const user = (
    <div className="profile-pic-container">
      <div className="profile-pic">
        <img src={Logo} alt="Main Logo" />
      </div>
      User Name
      <FontAwesomeIcon icon={faChevronDown} className="icon-chevron-down" />
    </div>
  );

  const profile = (
    <div className="drop-down-menu">
      <FontAwesomeIcon icon={faUserCircle} className="icon-dropdown" />
      Profile
    </div>
  );

  const logOut = (
    <div className="drop-down-menu">
      <FontAwesomeIcon icon={faSignOutAlt} className="icon-dropdown" />
      Logout
    </div>
  );

  const bell = (
    <div
      className="notification"
      onClick={() => setNotificationVisible(!notificationVisible)}
    >
      <FontAwesomeIcon icon={faBell} className="icon-bell" />
      <div className="notification-count">10</div>
      {notificationVisible && (
        <div className="notification-container">
          <Notification />
        </div>
      )}
    </div>
  );

  return (
    <Navbar className="navbar-bg" expand="md" collapseOnSelect>
      <Navbar.Brand href="#">
        <img src={Logo} alt="Main Logo" className="logo" />
        Civil Aviation Authority of Bangladesh
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {bell}

          <NavDropdown title={user} id="basic-nav-dropdown">
            <NavDropdown.Item href="#">{profile}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">{logOut}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
