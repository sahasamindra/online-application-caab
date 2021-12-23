import React, { useState } from "react";
import Header from "./Header/Header";
import "./layout.css";

function Layout() {
  let menus = ["Home", "New Application", "Settings"];
  const [active, setActive] = useState(0);

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
      </div>

      <div className="footer">
        Copyright @2021 <span>Civil Aviation Authority of Bangladesh</span>
      </div>
    </div>
  );
}

export default Layout;
