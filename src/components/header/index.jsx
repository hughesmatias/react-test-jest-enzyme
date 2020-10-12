import React from "react";
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Test
      </a>
    </header>
  );
};

export default Header;
