import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left spacing/Sidebar effect as seen in image */}
        <div className="col-md-1 d-none d-md-block py-5"></div>
        
        <div className="col-md-10 ps-md-5">
          <section className="mb-5">
            <h1 className="fw-bold mb-4">About EduConnect</h1>
            <p className="lead text-secondary">
              EduConnect is a modern, reliable Student Management System designed to simplify academic administration 
              and improve communication within educational institutions. We believe in reducing manual work and 
              improving transparency in education.
            </p>
          </section>

          <section className="mb-5">
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p className="text-secondary">
              Our mission is to empower educational institutions with the tools they need to efficiently manage student data, 
              streamline administrative processes, and foster a collaborative learning environment. We strive to provide a 
              user-friendly platform that enhances the educational experience for students, faculty, and administrators alike.
            </p>
          </section>

          <section className="mb-5">
            <h3 className="fw-bold mb-3">Our Vision</h3>
            <p className="text-secondary">
              Our vision is to be the leading Student Management System, recognized for its innovation, reliability, and 
              commitment to improving educational outcomes. We aim to continuously evolve our platform to meet the 
              changing needs of the education sector and to support institutions in achieving their goals.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

// CRITICAL: This line fixes the "does not provide an export named default" error
export default About;