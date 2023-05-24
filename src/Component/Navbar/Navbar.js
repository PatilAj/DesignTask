import React from "react";
import './Navbar.css';
import Theme from '../Theme/Theme';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
      <div className="container">
        <div className="nav-Heading">
          <h1>V</h1>
          <h5>iral Nation</h5>
        </div>
        <Theme/>
      </div>
    </nav>
  );
};
