import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
const NavBar = () => {
  return (
    <header>
      <a href="#">Logo</a>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
