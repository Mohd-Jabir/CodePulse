import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="navbar-container">
      {/* Logo on the left */}
      <div className="logo">
        CodePulse
      </div>

      {/* Right section: Nav links + toggle button */}
      <div className="nav-right">
        <div className={`nav-link ${mobileOpen ? "mobile-open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/Visualizer" className={({ isActive }) => (isActive ? "active" : "")}>
            Visualizer
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </div>
        <button className="mobile-toggle" onClick={toggleMobile}>
          {mobileOpen ? <XIcon className="icon" /> : <MenuIcon className="icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
