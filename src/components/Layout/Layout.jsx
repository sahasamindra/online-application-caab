import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import "./layout.css";
import Home from "./Content/Home/Home";

function Layout() {
  return (
    <div className="global">
      <div className="header-bar">
        <Header />
      </div>

      <div className="side-bar">
        <SideBar />
      </div>

      <div className="body-content">
        <div className="dynamic-content">
          <Home />
        </div>
      </div>

      <div className="footer">
        Copyright @2021 <span>Civil Aviation Authority of Bangladesh</span>
      </div>
    </div>
  );
}

export default Layout;
