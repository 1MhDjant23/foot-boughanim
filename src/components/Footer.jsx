import React from 'react';
import { FaFacebook, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <p>© 2025 Football Tournament. All rights reserved.</p>
       <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61569925741299" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/association_boughanim/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/1MhDjant23" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <p className="footer-contact">
        Developed by <a href="mailto:mhdjant607@gmail.com"><FaEnvelope /> mhdjant607@gmail.com</a>
        </p>
    </footer>
  );
}

export default Footer;
