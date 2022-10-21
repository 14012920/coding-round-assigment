import React from "react";
import "./App.css";

const HeaderTitle = ({ type }) => {
  return (
    <>
      <nav className="header-title">
        <h2>{`Popular ${type}`}</h2>
      </nav>
    </>
  );
};

export default HeaderTitle;
