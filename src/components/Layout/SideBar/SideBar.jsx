import React, { useState, useEffect } from "react";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const navigate = useNavigate();
  let menus = [
    { title: "Home", path: "home" },
    { title: "New Application", path: "newApplication" },
    { title: "Settings", path: "settings" },
  ];
  const [active, setActive] = useState(0);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="menu">
        <div>
          {menus.map((item, index) => (
            <div
              className={`menu-item ${active === index ? "active-item" : null}`}
              key={index}
              onClick={() => {
                setActive(index);
                navigate(item.path);
              }}
            >
              {item.title}
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
          {`${clock.getMonth() + 1}-${clock.getDate()}-${clock.getFullYear()}`}
        </span>
      </div>
    </>
  );
}

export default SideBar;
