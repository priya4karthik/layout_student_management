import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto">
      <div className="container text-center">
        {/* Navigation Links */}
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <Link to="/about" className="footer-link px-3">About Us</Link>
          </div>
          <div className="col-auto">
            <Link to="/contact" className="footer-link px-3">Contact</Link>
          </div>
          <div className="col-auto">
            <Link to="/privacy" className="footer-link px-3">Privacy Policy</Link>
          </div>
          <div className="col-auto">
            <Link to="/terms" className="footer-link px-3">Terms of Service</Link>
          </div>
        </div>

        {/* Social Icons - Re-added here */}
        <div className="social-icons mb-3">
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="pb-3" style={{ fontSize: '0.85rem', opacity: '0.8' }}>
          @2024 EduLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;