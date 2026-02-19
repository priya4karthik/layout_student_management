// import React from 'react';
// import { Link } from 'react-router-dom';
// import headerImg from '../../assets/images/header.jpg';
// const Home = () => {
//   return (
//     <div className="container py-5">
//       <div 
//         className="hero-section rounded-4 d-flex align-items-center justify-content-center text-center p-5"
//         style={{
//           background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${headerImg})`, // Placeholder for your illustration
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: '800px'
//         }}
//       >
//         <div className="hero-content text-white max-width-700">
//           <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
//             Smart Student Management Made Simple
//           </h1>
//           <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px', opacity: '0.9' }}>
//             Manage students, attendance, exams, and fees easily with one powerful system.
//           </p>
//           <Link to="/login" className="btn btn-login-gradient px-5 py-3 fs-5">
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../assets/images/header.jpg';

const Home = () => {
  const advantages = [
    { icon: 'bi-people', title: 'Centralized Student Data', text: 'Keep all student information in one place for easy access and management.' },
    { icon: 'bi-calendar-check', title: 'Easy Attendance', text: 'Streamline attendance tracking with digital tools and automated reports.' },
    { icon: 'bi-journal-check', title: 'Accurate Exam Management', text: 'Manage exams, results, and grading efficiently with automated processes.' },
    { icon: 'bi-currency-dollar', title: 'Transparent Fee Monitoring', text: 'Monitor fee payments, track outstanding balances, and generate reports.' },
    { icon: 'bi-shield-check', title: 'Role-Based Access', text: 'Control access levels for different users, ensuring data security and privacy.' },
  ];

  const modules = [
    { icon: 'bi-person-badge', title: 'Student Management', text: 'Manage student records, admissions, and profiles efficiently.' },
    { icon: 'bi-clipboard-check', title: 'Attendance Management', text: 'Track student attendance, generate reports, and monitor trends.' },
    { icon: 'bi-file-earmark-bar-graph', title: 'Exams & Results', text: 'Create exams, publish results, and manage grading systems.' },
    { icon: 'bi-wallet2', title: 'Fees Management', text: 'Manage fee structures, track payments, and generate financial reports.' },
    { icon: 'bi-person-video3', title: 'Teacher Management', text: 'Manage teacher profiles, schedules, and assignments.' },
  ];

  return (
    <div className="pb-5">
      {/* HERO SECTION */}
      <section className="container py-4">
        <div 
          className="hero-section rounded-4 d-flex align-items-center justify-content-center text-center p-5"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${headerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center', // FIX: Align to top to prevent cutting heads
            minHeight: '700px',               // FIX: Increased height to show more image
          }}
        >
          <div className="hero-content text-white" style={{ maxWidth: '800px' }}>
            <h1 className="display-3 fw-bold mb-3 shadow-text">Smart Student Management Made Simple</h1>
            <p className="fs-5 mb-4 shadow-text">Manage students, attendance, exams, and fees easily with one powerful system.</p>
            <Link to="/login" className="btn btn-login-gradient px-5 py-3 fs-5">Get Started</Link>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold">Our System's Advantages</h2>
        <p className="text-muted mb-4">Discover the benefits of using our system to streamline academic administration.</p>
        <div className="row g-4">
          {advantages.map((adv, index) => (
            <div className="col-md-2-4 col-sm-6" key={index}>
              <div className="card h-100 border-0 shadow-sm p-3">
                <i className={`bi ${adv.icon} fs-3 mb-2 text-primary`}></i>
                <h6 className="fw-bold small">{adv.title}</h6>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>{adv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold">Explore Our Modules</h2>
        <p className="text-muted mb-4">Our system offers a range of modules to cover all aspects of management.</p>
        <div className="row g-4">
          {modules.map((mod, index) => (
            <div className="col-md-2-4 col-sm-6" key={index}>
              <div className="card h-100 border-0 shadow-sm p-3 border-start border-primary border-4">
                <i className={`bi ${mod.icon} fs-3 mb-2 text-dark`}></i>
                <h6 className="fw-bold small">{mod.title}</h6>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>{mod.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;