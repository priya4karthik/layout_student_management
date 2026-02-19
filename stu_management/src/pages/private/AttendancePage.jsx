import React, { useState } from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';

const AttendancePage = () => {
  // Mock data for the student list
  const initialStudents = [
    { id: 1, name: 'Liza Harper', roll: '101', present: false },
    { id: 2, name: 'Olivia Bennett', roll: '102', present: false },
    { id: 3, name: 'Noah Carter', roll: '103', present: false },
    { id: 4, name: 'Emma Hayes', roll: '104', present: false },
    { id: 5, name: 'Jackson Reed', roll: '105', present: false },
    { id: 6, name: 'Ava Morgan', roll: '106', present: false },
    { id: 7, name: 'Aiden Foster', roll: '107', present: false },
    { id: 8, name: 'Chloe Parker', roll: '108', present: false },
    { id: 9, name: 'Lucas Wright', roll: '109', present: false },
    { id: 10, name: 'Sophia Evans', roll: '110', present: false },
  ];

  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, present: !s.present } : s
    ));
  };

  return (
    <div className="bg-white min-vh-100 pb-5">
      <AdminNavbar />
      
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>Attendance Management</h2>

        {/* Selection Area */}
        <div className="row mb-5 g-4">
          <div className="col-md-12">
            <label className="fw-bold small mb-2">Class</label>
            <select className="form-select bg-light border-0 py-2">
              <option>Select Class</option>
              <option>Grade 10-A</option>
              <option>Grade 11-B</option>
            </select>
          </div>
          <div className="col-md-12">
            <label className="fw-bold small mb-2">Date</label>
            <input type="date" className="form-select bg-light border-0 py-2" />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden" style={{ border: '1px solid #dce3eb !important' }}>
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
                    <td style={{ color: '#4D7399' }}>{s.roll}</td>
                    <td className="text-center">
                      <input 
                        type="checkbox" 
                        className="form-check-input"
                        checked={s.present}
                        onChange={() => toggleAttendance(s.id)}
                        style={{ cursor: 'pointer', transform: 'scale(1.2)' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-edu-primary px-5 py-2">Save Attendance</button>
        </div>
      </main>
    </div>
  );
};

export default AttendancePage;