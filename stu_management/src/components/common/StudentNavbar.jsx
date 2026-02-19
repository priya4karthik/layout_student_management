import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const StudentNavbar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard/student' },
    { name: 'Attendance', path: '/student/attendance' },
    { name: 'Result', path: '/student/result' },
    { name: 'Fees', path: '/student/fees' },
    { name: 'Profile', path: '/student/profile' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard/student">
          <i className="bi bi-person-badge me-2"></i> EduLink
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-2">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link fw-semibold teacher-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/login" className="btn btn-login-blue px-4 py-2 fw-bold text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;