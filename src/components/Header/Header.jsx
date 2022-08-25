import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header box-shadow">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3534/3534051.png"
        alt="logo"
        className="logo"
      />
      <h1 className="header-title">Questionnaire</h1>
    </header>
  );
};

export default Header;
