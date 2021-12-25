import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./layout.css";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Layout() {
  let menus = ["Home", "New Application", "Settings"];
  const [active, setActive] = useState(0);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="global">
      <div className="header-bar">
        <Header />
      </div>

      <div className="side-bar">
        <div className="menu">
          <div>
            {menus.map((item, index) => (
              <div
                className={`menu-item ${
                  active === index ? "active-item" : null
                }`}
                key={index}
                onClick={() => setActive(index)}
              >
                {item}
              </div>
            ))}

            {/* <div className="menu-item">Home</div>
            <div className="menu-item">New Application</div>
            <div className="menu-item">Settings</div> */}
          </div>
        </div>
        <div className="welcome">
          {clock.getHours() < 18 ? (
            <FontAwesomeIcon icon={faSun} className="icon-sun" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="icon-sun" />
          )}
          <br />
          <span id="welcomeMsg">
            Good{" "}
            {clock.getHours() < 12
              ? "Morning"
              : clock.getHours() < 18
              ? "Afternoon"
              : "Evening"}
          </span>
          <br />
          <span id="clock">
            {clock.toLocaleTimeString()} |{" "}
            {`${
              clock.getMonth() + 1
            }-${clock.getDate()}-${clock.getFullYear()}`}
          </span>
        </div>
      </div>

      <div className="body-content">
        <div className="dynamic-content"></div>
      </div>

      <div className="footer">
        Copyright @2021 <span>Civil Aviation Authority of Bangladesh</span>
      </div>
    </div>
  );
}

export default Layout;
