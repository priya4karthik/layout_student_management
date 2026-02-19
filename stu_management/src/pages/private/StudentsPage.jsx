import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../components/common/AdminNavbar';

const StudentsPage = () => {
  const students = [
    { name: 'Sophia Clark', roll: '101', class: '10th', section: 'A', status: 'Active' },
    { name: 'Ethan Walker', roll: '102', class: '10th', section: 'B', status: 'Active' },
    { name: 'Olivia Reed', roll: '103', class: '10th', section: 'A', status: 'Inactive' },
    { name: 'Liam Hayes', roll: '104', class: '10th', section: 'B', status: 'Active' },
    { name: 'Ava Morgan', roll: '105', class: '10th', section: 'A', status: 'Active' },
  ];

  return (
    <div className="bg-white min-vh-100">
      <AdminNavbar />
      
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-bold" style={{ color: '#081D32' }}>Students</h1>
          <button className="btn btn-light border px-4 py-2 shadow-sm rounded-3 fw-bold" style={{ fontSize: '0.85rem' }}>
            Add New Student
          </button>
        </div>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden" style={{ border: '1px solid #dce3eb !important' }}>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Student Name</th>
                  <th>Roll No</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{s.name}</td>
                    <td style={{ color: '#4D7399' }}>{s.roll}</td>
                    <td style={{ color: '#4D7399' }}>{s.class}</td>
                    <td style={{ color: '#4D7399' }}>{s.section}</td>
                    <td>
                      <span className={`badge rounded-pill px-3 py-2 ${s.status === 'Active' ? 'bg-light text-dark' : 'bg-light text-muted'}`} 
                            style={{ fontSize: '0.75rem', border: '1px solid #dee2e6' }}>
                        {s.status}
                      </span>
                    </td>
                    <td className="text-center small fw-bold" style={{ color: '#195898' }}>
                      {/* <span className="cursor-pointer">View</span> |  */}
                      <Link to="/admin/student-profile" className="text-decoration-none me-2">View</Link> |
                      <span className="mx-1 cursor-pointer">Edit</span> | 
                      <span className="cursor-pointer">Delete</span>
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

export default StudentsPage;