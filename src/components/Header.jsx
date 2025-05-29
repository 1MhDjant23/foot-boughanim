import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header" id="header">
      <div className="logo">
      <span className="logo-part1">BOU</span>
      <span className="logo-part2">GHANIM</span>
    </div>

      {/* <div className="logo"> <video autoPlay loop muted src="/logov.mp4"></video>
    </div> */}
      <div className="header-controls">
        {!menuOpen && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            ✖
          </button>
        )}
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#teams" onClick={() => setMenuOpen(false)}>Teams</a>
        <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
        <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
