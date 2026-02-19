import React from 'react';
import TeacherNavbar from '../../components/common/TeacherNavbar';

const TeacherAttendance = () => {
  const students = [
    { id: '101', name: 'Liam Carter' },
    { id: '102', name: 'Olivia Bennett' },
    { id: '103', name: 'Noah Foster' },
    // ... add other students from image_d648e9.png
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-4" style={{ color: '#081D32' }}>Attendance Management</h2>

        {/* Triple Selection Area */}
        <div className="mb-4">
          <select className="form-select bg-light border-secondary-subtle py-2 mb-3 shadow-sm">
            <option>Select Class</option>
          </select>
          <select className="form-select bg-light border-secondary-subtle py-2 mb-3 shadow-sm">
            <option>Select Section</option>
          </select>
          <select className="form-select bg-light border-secondary-subtle py-2 mb-3 shadow-sm">
            <option>Select Date</option>
          </select>
        </div>

        {/* Table matches the clean style of your admin pages */}
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden mb-4">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Student Name</th>
                  <th>Roll Number</th>
                  <th className="text-center">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{s.name}</td>
                    <td style={{ color: '#4D7399' }}>{s.id}</td>
                    <td className="text-center">
                      <input type="checkbox" className="form-check-input border-secondary-subtle" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Specific Footer Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn px-4 py-2 text-white fw-bold" style={{ backgroundColor: '#195898' }}>
            Mark Attendance
          </button>
          <button className="btn btn-light border px-4 py-2 fw-bold text-secondary">
            Update Attendance
          </button>
        </div>
      </main>
    </div>
  );
};

export default TeacherAttendance;