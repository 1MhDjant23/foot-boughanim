import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handlclickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target))
        setMenuOpen(false);
  }
  document.addEventListener("mousedown", handlclickOutside);
  return () => {
    document.removeEventListener("mousedown", handlclickOutside);
  };
  }, [menuOpen]);

  return (
    <>
    <header className="header" id="header">
      <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
      <span className="logo-part1">BOU</span>
      <span className="logo-part2">GHANIM</span>
      </a>
      <div className="header-controls">
        {!menuOpen && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </div>

      <nav ref={navRef} className={`nav ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            ✖
          </button>
        )}
        <a href="#teams" onClick={() => setMenuOpen(false)}>Teams</a>
        <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
        <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
        <a href="/rules.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Rules</a>
        <a href="#about"  onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
        </>
  );
}

export default Header;
