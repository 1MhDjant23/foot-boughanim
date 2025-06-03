import React from 'react';
import { FaFacebook, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <p>© 2025 Football Tournament. All rights reserved.</p>
       <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <p className="footer-contact">
        Developed by <a href="mailto:your.email@example.com"><FaEnvelope /> mhdjant607@gmail.com</a>
        </p>
    </footer>
  );
}

export default Footer;
