import React from 'react';
import TeacherNavbar from '../../components/common/TeacherNavbar';
import { useNavigate } from 'react-router-dom';

const TeacherProfile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    // 1. Clear user data (e.g., localStorage.removeItem('user_token'))
    // 2. Redirect to home page
    navigate('/'); 
  };
  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>My Profile</h2>

        {/* Name & Employee ID Section */}
        <section className="mb-5">
          <h5 className="fw-bold mb-4">Name & Employee ID</h5>
          <div className="row g-4">
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Name</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="Mrs. Emily Carter" />
            </div>
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Employee ID</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="TCH-2024-001" />
            </div>
          </div>
        </section>

        {/* Assigned Classes & Subjects Section */}
        <section className="mb-5">
          <h5 className="fw-bold mb-4">Assigned classes & subjects</h5>
          <div className="row g-4 mb-4">
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Class</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="Class 10" />
            </div>
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Subject</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="Mathematics" />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Class</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="Class 11" />
            </div>
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Subject</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="Physics" />
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="mb-5">
          <h5 className="fw-bold mb-4">Contact details</h5>
          <div className="row g-4">
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Email</label>
              <input type="email" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="emily.carter@school.com" />
            </div>
            <div className="col-md-5">
              <label className="small fw-bold mb-2">Phone</label>
              <input type="text" className="form-control bg-light py-2 border-0 shadow-sm" defaultValue="+1 234 567 890" />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap gap-2 mt-4 pt-2">
          <button className="btn px-4 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#195898' }}>
            Edit Profile
          </button>
          <button className="btn btn-light border px-4 py-2 fw-bold text-secondary shadow-sm">
            Change Password
          </button>
          <button onClick={handleLogout} className="btn px-4 py-2 text-white fw-bold shadow-sm d-flex align-items-center" style={{ backgroundColor: '#081D32' }}>
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </main>
    </div>
  );
};

export default TeacherProfile;