
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2">
//       <div className="container">
//         <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard/admin">
//           <i className="bi bi-graph-up-arrow me-2 text-dark"></i> EduLink
//         </Link>
        
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="adminNav">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
//             <li className="nav-item"><Link className="nav-link fw-semibold active" to="/dashboard/admin">Dashboard</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="/admin/teachers">Teachers</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="#">Students</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="#">Attendance</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="#">Exams & Result</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="#">Fees</Link></li>
//             <li className="nav-item"><Link className="nav-link fw-semibold text-dark" to="#">Settings</Link></li>
//           </ul>
//           {/* Blue button to match Login screen */}
//           <Link to="/login" className="btn btn-login-blue px-4 py-2 fw-bold text-white">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AdminNavbar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard/admin' },
    { name: 'Teachers', path: '/admin/teachers' },
    { name: 'Students', path: '/admin/students' },
    { name: 'Attendance', path: '/admin/attendance' },
    { name: 'Exams & Result', path: '/admin/exams' },
    { name: 'Fees', path: '/admin/fees' },
    { name: 'Settings', path: '/admin/settings' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard/admin" style={{ color: '#081D32' }}>
          <i className="bi bi-graph-up-arrow me-2"></i> EduLink
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `nav-link fw-semibold admin-nav-item ${isActive ? 'active' : ''}`
                  }
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

export default AdminNavbar;