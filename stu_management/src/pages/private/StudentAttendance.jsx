import React from 'react';
import StudentNavbar from '../../components/common/StudentNavbar';

const StudentAttendance = () => {
  // Sample data for monthly records
  const attendanceData = [
    { date: '2024-05-15', status: 'Present', remarks: 'Regular Class' },
    { date: '2024-05-14', status: 'Present', remarks: 'Regular Class' },
    { date: '2024-05-13', status: 'Absent', remarks: 'Medical Leave' },
    { date: '2024-05-12', status: 'Present', remarks: 'Regular Class' },
    { date: '2024-05-11', status: 'Present', remarks: 'Regular Class' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <StudentNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-1" style={{ color: '#081D32' }}>Attendance Record</h2>
        <p className="text-secondary mb-5">View your monthly attendance details and percentages.</p>

        {/* Attendance Summary Card */}
        <div className="card border-0 shadow-sm p-4 rounded-3 mb-5" style={{ backgroundColor: '#E9EEF3', maxWidth: '400px' }}>
          <p className="small mb-1 text-secondary fw-bold text-uppercase">Total Attendance</p>
          <div className="d-flex align-items-end gap-2">
            <h1 className="fw-bold mb-0">92%</h1>
            <span className="text-success small fw-bold mb-2">+2% from last month</span>
          </div>
        </div>

        {/* Detailed Attendance Table */}
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Date</th>
                  <th>Status</th>
                  <th className="pe-4 text-end">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium text-dark">{record.date}</td>
                    <td>
                      <span className={`badge rounded-pill px-3 py-2 ${
                        record.status === 'Present' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="pe-4 text-end text-secondary small">{record.remarks}</td>
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

export default StudentAttendance;