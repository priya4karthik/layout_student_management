import React from 'react';
import { Link } from 'react-router-dom';
import TeacherNavbar from '../../components/common/TeacherNavbar';

const TeacherClasses = () => {
  // Data matching your design
  const classesData = [
    { name: 'Class 10', section: 'A', subject: 'Mathematics', students: 45 },
    { name: 'Class 11', section: 'B', subject: 'Physics', students: 38 },
    { name: 'Class 12', section: 'C', subject: 'Chemistry', students: 42 },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>My Classes</h2>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Class Name</th>
                  <th>Section</th>
                  <th>Subject Taught</th>
                  <th>Number of Students</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {classesData.map((cls, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="ps-4 py-4 fw-medium text-dark">{cls.name}</td>
                    <td style={{ color: '#4D7399' }}>{cls.section}</td>
                    <td style={{ color: '#4D7399' }}>{cls.subject}</td>
                    <td style={{ color: '#4D7399' }}>{cls.students}</td>
                    <td className="text-end pe-4">
                      {/* Action links with separators */}
                      <div className="small fw-bold">
                        <Link to="/teacher/students" className="text-decoration-none" style={{ color: '#4D7399' }}>View Students</Link>
                        <span className="mx-1 text-dark">|</span>
                        <Link to="/teacher/attendance" className="text-decoration-none" style={{ color: '#4D7399' }}>Mark Attendance</Link>
                        <span className="mx-1 text-dark">|</span>
                        <Link to="/teacher/marks" className="text-decoration-none" style={{ color: '#4D7399' }}>Enter Marks</Link>
                      </div>
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

export default TeacherClasses;