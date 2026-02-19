import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/css/style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm py-3">
      <div className="container">
        
        {/* Brand/Logo Section */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <div className="logo-container me-2">
            <div className="logo-bar-tall"></div>
            <div className="logo-bar-wide"></div>
          </div>
          <span style={{ fontSize: '1.4rem', letterSpacing: '-0.5px' }}>EduLink</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links Section */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/features">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/contact">Contact</NavLink>
            </li>
            
            {/* Login Button */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <Link className="btn btn-login-gradient" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;