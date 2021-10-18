import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav navbar-dark bg-dark ">
      <div className="container-fluid ">
        <ul className="nav justify-content-center ">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link ">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
