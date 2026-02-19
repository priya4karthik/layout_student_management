import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../../components/common/StudentNavbar';

const StudentProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to clear session
    navigate('/');
  };

  return (
    <div className="bg-white min-vh-100 pb-5">
      <StudentNavbar />
      <main className="container py-4" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>My Profile</h2>

        {/* Personal Information Section */}
        <section className="mb-5">
          <h5 className="fw-bold mb-4">Personal Information</h5>
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="text-primary small mb-1">Student Name</p>
              <p className="fw-bold text-dark">Ethan Harper</p>
            </div>
            <div className="col-md-6">
              <p className="text-primary small mb-1">Roll Number</p>
              <p className="fw-bold text-dark">2023-SH-1234</p>
            </div>
          </div>
          <div className="row border-bottom pb-4">
            <div className="col-md-6">
              <p className="text-primary small mb-1">Class & Section</p>
              <p className="fw-bold text-dark">Grade 10 - A</p>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="mb-5">
          <h5 className="fw-bold mb-4">Contact Details</h5>
          <div className="row border-bottom pb-4">
            <div className="col-md-6">
              <p className="text-primary small mb-1">Email</p>
              <p className="fw-bold text-dark">ethan.harper@example.com</p>
            </div>
            <div className="col-md-6">
              <p className="text-primary small mb-1">Phone Number</p>
              <p className="fw-bold text-dark">+1 (555) 123-4567</p>
            </div>
          </div>
        </section>

        {/* Actions Section */}
        <section>
          <h5 className="fw-bold mb-4">Actions</h5>
          
          {/* Action List Items */}
          <div className="list-group list-group-flush shadow-sm rounded-3 overflow-hidden border">
            <button className="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center border-bottom bg-light bg-opacity-10">
              <span className="fw-bold small">Edit Profile (Limited)</span>
              <i className="bi bi-pencil small"></i>
            </button>
            <button className="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center border-bottom bg-light bg-opacity-10">
              <span className="fw-bold small">Change Password</span>
              <i className="bi bi-lock small"></i>
            </button>
            <button 
              onClick={handleLogout}
              className="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center bg-light bg-opacity-10"
            >
              <span className="fw-bold small">Logout</span>
              <i className="bi bi-box-arrow-right small"></i>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentProfile;