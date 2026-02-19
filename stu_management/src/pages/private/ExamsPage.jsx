import React, { useState } from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';

const ExamsPage = () => {
  // 1. Set default tab to 'Upcoming' so it's the first thing seen
  const [activeTab, setActiveTab] = useState('Upcoming');

  const upcomingExams = [
    { name: 'Midterm Exam', class: 'Grade 10', section: 'A', date: '2024-07-15', time: '09:00 AM', status: 'Upcoming' },
    { name: 'Final Exam', class: 'Grade 11', section: 'B', date: '2024-07-16', time: '10:00 AM', status: 'Tomorrow' },
    { name: 'Quarterly Exam', class: 'Grade 9', section: 'C', date: '2024-07-17', time: '11:00 AM', status: 'This Week' }
  ];


 const pastExams = [
    { name: 'Midterm Exam', class: 'Grade 10', section: 'A', date: '2024-07-15', time: '09:00 AM', status: 'Completed' },
    { name: 'Final Exam', class: 'Grade 11', section: 'B', date: '2024-07-16', time: '10:00 AM', status: 'Completed' },
  ];

 const examResults = [
    { subject: 'Mathematics', obtained: 85, total: 100, grade: 'A' },
    { subject: 'Science', obtained: 78, total: 100, grade: 'B+' },
    { subject: 'English', obtained: 92, total: 100, grade: 'A+' },
    { subject: 'Social Studies', obtained: 88, total: 100, grade: 'A' },
    { subject: 'Computer Science', obtained: 95, total: 100, grade: 'A+' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <AdminNavbar />
      <main className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold" style={{ color: '#081D32' }}>Exams & Results</h2>
          <button className="btn btn-light border px-4 shadow-sm fw-bold small">Create Exam</button>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex gap-4 mb-4 border-bottom">
          {['Upcoming', 'Past', 'Results'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn px-0 pb-2 fw-bold position-relative ${activeTab === tab ? 'text-dark' : 'text-secondary opacity-50'}`}
              style={{ border: 'none', background: 'none', fontSize: '0.9rem' }}
            >
              {tab} Exams
              {activeTab === tab && (
                <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#195898' }}></div>
              )}
            </button>
          ))}
        </div>

        <h5 className="fw-bold mb-4">{activeTab} {activeTab === 'Results' ? '' : 'Exams'}</h5>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden mb-4" style={{ border: '1px solid #dce3eb !important' }}>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  {/* DYNAMIC HEADERS based on tab */}
                  {activeTab === 'Results' ? (
                    <>
                      <th className="ps-4 py-3">Subject</th>
                      <th className="text-center">Marks Obtained</th>
                      <th className="text-center">Total Marks</th>
                      <th className="text-center">Grade</th>
                    </>
                  ) : (
                    <>
                      <th className="ps-4 py-3">Exam Name</th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Exam Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* 2. DYNAMIC CONTENT logic */}
                {activeTab === 'Upcoming' && upcomingExams.map((ex, i) => (
                  <tr key={i} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{ex.name}</td>
                    <td style={{ color: '#4D7399' }}>{ex.class}</td>
                    <td style={{ color: '#4D7399' }}>{ex.section}</td>
                    <td style={{ color: '#4D7399' }}>{ex.date}</td>
                    <td style={{ color: '#4D7399' }}>{ex.time}</td>
                    <td><span className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-normal">{ex.status}</span></td>
                    <td className="text-center"><button className="btn btn-link text-decoration-none fw-bold small p-0" style={{ color: '#195898' }}>View details</button></td>
                  </tr>
                ))}

                {activeTab === 'Past' && pastExams.map((ex, i) => (
                  <tr key={i} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{ex.name}</td>
                    <td style={{ color: '#4D7399' }}>{ex.class}</td>
                    <td style={{ color: '#4D7399' }}>{ex.section}</td>
                    <td style={{ color: '#4D7399' }}>{ex.date}</td>
                    <td style={{ color: '#4D7399' }}>{ex.time}</td>
                    <td><span className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-normal">Completed</span></td>
                    <td className="text-center"><button className="btn btn-link text-decoration-none fw-bold small p-0" style={{ color: '#195898' }}>View details</button></td>
                  </tr>
                ))}

                {activeTab === 'Results' && examResults.map((res, i) => (
                  <tr key={i} className="border-bottom">
                    <td className="ps-4 py-3 fw-medium">{res.subject}</td>
                    <td className="text-center" style={{ color: '#4D7399' }}>{res.obtained}</td>
                    <td className="text-center" style={{ color: '#4D7399' }}>{res.total}</td>
                    <td className="text-center" style={{ color: '#4D7399' }}>{res.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. SHOW FOOTER ONLY ON RESULTS TAB */}
        {activeTab === 'Results' && (
          <div className="mt-4 text-start">
            <h5 className="fw-bold" style={{ color: '#4D7399' }}>Total Marks: 438 / 500 | Grade: A</h5>
          </div>
        )}
      </main>
    </div>
  );
};

export default ExamsPage;