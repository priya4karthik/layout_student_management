import React from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';

const TeachersPage = () => {
  const teachers = [
    { name: 'Ms. Emily Carter', subject: 'Mathematics', class: 'Grade 10' },
    { name: 'Mr. David Lee', subject: 'Science', class: 'Grade 11' },
    { name: 'Dr. Sarah Jones', subject: 'English', class: 'Grade 12' },
    { name: 'Prof. Michael Brown', subject: 'History', class: 'Grade 9' },
    { name: 'Mrs. Olivia Green', subject: 'Physics', class: 'Grade 11' },
  ];

  return (
    <div className="bg-white min-vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <AdminNavbar />
      
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold" style={{ color: '#081D32' }}>Teacher Management</h2>
          <button className="btn btn-light border px-4 py-2 shadow-sm rounded-3 fw-bold" style={{ fontSize: '0.9rem' }}>
            Add Teacher
          </button>
        </div>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden" style={{ border: '1px solid #e0e4e8 !important' }}>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#ebf1f7', borderBottom: '2px solid #195898' }}>
                <tr>
                  <th className="ps-4 py-3 text-secondary fw-semibold">Teacher Name</th>
                  <th className="py-3 text-secondary fw-semibold">Subject</th>
                  <th className="py-3 text-secondary fw-semibold">Class Assigned</th>
                  <th className="py-3 text-center text-secondary fw-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((t, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f2f5' }}>
                    <td className="ps-4 py-3 fw-medium text-dark">{t.name}</td>
                    <td className="py-3" style={{ color: '#4D7399' }}>{t.subject}</td>
                    <td className="py-3" style={{ color: '#4D7399' }}>{t.class}</td>
                    <td className="py-3 text-center">
                      <button className="btn btn-link text-decoration-none fw-bold p-0" style={{ color: '#195898' }}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeachersPage;