import React, { useState } from "react";
import "./App.css";
const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>DEMO Streaming</h1>
        </div>
        <div className={"menu-link"}>
          <h3>Login</h3>
          <button>Start your free trail</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
