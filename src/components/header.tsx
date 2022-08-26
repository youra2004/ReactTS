import React from "react";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React + TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
