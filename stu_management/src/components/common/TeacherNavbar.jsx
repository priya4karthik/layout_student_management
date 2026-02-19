// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';

// const TeacherNavbar = () => {
//   const menuItems = [
//     { name: 'Dashboard', path: '/teacher/dashboard' },
//     { name: 'Attendance', path: '/teacher/attendance' },
//     { name: 'Marks', path: '/teacher/marks' },
//     { name: 'Classes', path: '/teacher/classes' },
//     { name: 'Report', path: '/teacher/reports' },
//     { name: 'Profile', path: '/teacher/profile' },
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2">
//       <div className="container">
//         <Link className="navbar-brand fw-bold d-flex align-items-center" to="/teacher/dashboard">
//           <i className="bi bi-graph-up-arrow me-2"></i> EduLink
//         </Link>
//         <div className="collapse navbar-collapse" id="teacherNav">
//           <ul className="navbar-nav mx-auto gap-2">
//             {menuItems.map((item) => (
//               <li className="nav-item" key={item.name}>
//                 <NavLink 
//                   to={item.path} 
//                   className={({ isActive }) => `nav-link fw-semibold admin-nav-item ${isActive ? 'active' : ''}`}
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//           <Link to="/login" className="btn btn-login-blue px-4 py-2 fw-bold text-white">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TeacherNavbar;
// src/components/common/TeacherNavbar.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const TeacherNavbar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard/teacher' },
    { name: 'Attendance', path: '/teacher/attendance' },
    { name: 'Marks', path: '/teacher/marks' },
    { name: 'Classes', path: '/teacher/classes' },
    { name: 'Report', path: '/teacher/reports' },
    { name: 'Profile', path: '/teacher/profile' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard/teacher">
          <i className="bi bi-graph-up-arrow me-2 text-dark"></i> EduLink
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-3">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `nav-link fw-semibold teacher-nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/login" className="btn btn-login-blue px-4 text-white fw-bold">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default TeacherNavbar;