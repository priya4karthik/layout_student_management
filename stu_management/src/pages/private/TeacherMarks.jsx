import React from 'react';
import TeacherNavbar from '../../components/common/TeacherNavbar';

const TeacherMarks = () => {
  const studentMarks = [
    { name: 'Liam Harper', roll: '101', marks: 85, grade: 'A' },
    { name: 'Olivia Bennett', roll: '102', marks: 92, grade: 'A+' },
    { name: 'Noah Carter', roll: '103', marks: 78, grade: 'B' },
    { name: 'Emma Hayes', roll: '104', marks: 88, grade: 'A' },
    { name: 'Jackson Reed', roll: '105', marks: 95, grade: 'A+' },
    { name: 'Ava Morgan', roll: '106', marks: 72, grade: 'C' },
    { name: 'Aiden Foster', roll: '107', marks: 80, grade: 'B' },
    { name: 'Chloe Evans', roll: '108', marks: 90, grade: 'A' },
    { name: 'Lucas Parker', roll: '109', marks: 65, grade: 'D' },
    { name: 'Sophia Hughes', roll: '110', marks: 82, grade: 'B' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>Marks & Results</h2>

        {/* Exam and Class Selection */}
        <div className="mb-4">
          <select className="form-select bg-light border-secondary-subtle py-2 mb-3 shadow-sm">
            <option>Select Exam</option>
          </select>
          <select className="form-select bg-light border-secondary-subtle py-2 mb-5 shadow-sm">
            <option>Select Class & Subject</option>
          </select>
        </div>

        {/* Marks Table */}
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden mb-4">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Student Name</th>
                  <th>Roll No.</th>
                  <th>Marks</th>
                  <th>Total / Grade</th>
                </tr>
              </thead>
              <tbody>
                {studentMarks.map((s, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{s.name}</td>
                    <td style={{ color: '#4D7399' }}>{s.roll}</td>
                    <td style={{ color: '#4D7399' }}>{s.marks}</td>
                    <td style={{ color: '#4D7399' }}>{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-column align-items-end gap-3 mt-4">
          <div className="d-flex gap-2">
            <button className="btn px-4 py-2 text-white fw-bold" style={{ backgroundColor: '#195898' }}>
              Save Marks
            </button>
            <button className="btn btn-light border px-4 py-2 fw-bold text-secondary">
              Edit Marks
            </button>
          </div>
          <button className="btn px-5 py-2 text-white fw-bold" style={{ backgroundColor: '#081D32' }}>
            Submit for Approval
          </button>
        </div>
      </main>
    </div>
  );
};

export default TeacherMarks;