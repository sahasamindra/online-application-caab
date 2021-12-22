import React from "react";
import Header from "./Header/Header";
import "./layout.css";

function Layout() {
  return (
    <div className="global">
      <Header />
      <div className="footer">
        Copyright @2021{" "}
        <a href="/footer">Civil Aviation Authority of Bangladesh</a>
      </div>
    </div>
  );
}

export default Layout;
