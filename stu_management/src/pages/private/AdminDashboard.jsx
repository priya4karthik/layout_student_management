import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/common/AdminNavbar';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Data for the Stat Cards
  const stats = [
    { label: 'Total Students', value: '450' },
    { label: 'Total Teachers', value: '30' },
    { label: 'Classes', value: '15' },
    { label: 'Attendance %', value: '92%' },
    { label: 'Fees Status', value: 'Paid' },
  ];

  // FIX: This array was missing, causing your error
  const activities = [
    { icon: 'bi-mortarboard', title: 'New student enrolled', detail: 'Sophia Clark enrolled in Class 10A' },
    { icon: 'bi-people', title: 'Teacher added', detail: 'Mr. David Miller joined the faculty' },
    { icon: 'bi-building', title: 'Class created', detail: 'Class 10B created' },
  ];

  return (
    <div className="bg-white min-vh-100">
      <AdminNavbar />
      <main className="container py-5">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold h2 mb-1">Dashboard</h1>
            <p className="text-secondary small">Welcome back, Sarah! Here's a quick overview of your school's activities.</p>
          </div>
          <button className="btn btn-edu-primary" onClick={() => navigate('/')}>
             <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>

        {/* Stat Cards Section */}
        <div className="row g-3 mb-5">
          {stats.map((s, i) => (
            <div className="col" key={i}>
              <div className="stat-card">
                <p className="small fw-semibold text-secondary mb-3">{s.label}</p>
                <h2 className="fw-bold mb-0">{s.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <h5 className="fw-bold mb-3">Quick Actions</h5>
        <div className="d-flex flex-wrap gap-2 mb-5">
          <button className="btn btn-edu-primary">Add Student</button>
          <button className="btn btn-quick-action shadow-sm">Mark Attendance</button>
          <button className="btn btn-quick-action shadow-sm">View Reports</button>
          <button className="btn btn-quick-action shadow-sm">Add Teacher</button>
          <button className="btn btn-quick-action shadow-sm">Create Class</button>
          <button className="btn btn-quick-action shadow-sm">Generate Report</button>
        </div>

        {/* Recent Activities Section */}
        <h5 className="fw-bold mb-4">Recent Activities</h5>
        <div className="ps-2">
          {activities.map((act, i) => (
            <div className="timeline-item d-flex mb-4" key={i}>
              <div className="me-3">
                <i className={`bi ${act.icon} fs-5 text-secondary`}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">{act.title}</h6>
                <p className="small mb-0 opacity-75" style={{ color: '#195898' }}>{act.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;