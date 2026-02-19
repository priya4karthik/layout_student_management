import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../../components/common/StudentNavbar';

// Local Image Imports
import attendanceBanner from '../../assets/images/s1.jpg';
import gradesBanner from '../../assets/images/s2.jpg';
import feesBanner from '../../assets/images/s3.jpg';
import reportCardBanner from '../../assets/images/s4.jpg';
import profileMgmtBanner from '../../assets/images/s6.jpg';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-vh-100 pb-5">
      <StudentNavbar />
      
      <main className="container py-4">
        <h2 className="fw-bold mb-1" style={{ color: '#081D32' }}>Student Dashboard</h2>
        <p className="text-secondary mb-5">Welcome back, Sarah! Here's a summary of your academic progress.</p>

        {/* Quick Actions */}
        <h5 className="fw-bold mb-3" style={{ color: '#081D32' }}>Quick Actions</h5>
        <div className="d-flex gap-3 mb-5">
          <button 
            onClick={() => navigate('/student/attendance')}
            className="btn px-4 py-2 fw-bold text-white shadow-sm" 
            style={{ backgroundColor: '#195898' }}
          >
            View Attendance
          </button>
          <button 
            onClick={() => navigate('/student/result')}
            className="btn btn-light border px-4 py-2 fw-bold shadow-sm text-secondary"
          >
            View Results
          </button>
        </div>

        {/* Academic Overview Sections */}
        {/* Attendance Section */}
        <div className="d-flex align-items-center gap-4 mb-5 p-2 border-bottom pb-4 cursor-pointer" 
             onClick={() => navigate('/student/attendance')} style={{ cursor: 'pointer' }}>
          <div className="flex-grow-1">
            <p className="text-primary small fw-bold mb-1">Attendance</p>
            <h6 className="fw-bold mb-1">Attendance Percentage</h6>
            <p className="small text-secondary mb-0">Your attendance rate is currently at 92%.</p>
          </div>
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '400px', height: '110px' }}>
            <img src={attendanceBanner} alt="Attendance" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>

        {/* Grades Section */}
        <div className="d-flex align-items-center gap-4 mb-5 p-2 border-bottom pb-4 cursor-pointer" 
             onClick={() => navigate('/student/result')} style={{ cursor: 'pointer' }}>
          <div className="flex-grow-1">
            <p className="text-primary small fw-bold mb-1">Grades</p>
            <h6 className="fw-bold mb-1">Exam Results and Grades</h6>
            <p className="small text-secondary mb-0">Check your latest exam results and grades.</p>
          </div>
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '400px', height: '110px' }}>
            <img src={gradesBanner} alt="Grades" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>

        {/* Fees Section */}
        <div className="d-flex align-items-center gap-4 mb-5 p-2 border-bottom pb-4 cursor-pointer" 
             onClick={() => navigate('/student/fees')} style={{ cursor: 'pointer' }}>
          <div className="flex-grow-1">
            <p className="text-primary small fw-bold mb-1">Fees</p>
            <h6 className="fw-bold mb-1">Fee Payment Status</h6>
            <p className="small text-secondary mb-0">Your fee payment status is up to date.</p>
          </div>
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '400px', height: '110px' }}>
            <img src={feesBanner} alt="Fees" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>

        {/* Report Card Section */}
        <div className="d-flex align-items-center gap-4 mb-5 p-2 border-bottom pb-4">
          <div className="flex-grow-1">
            <p className="text-primary small fw-bold mb-1">Report Card</p>
            <h6 className="fw-bold mb-1">Download Report Card</h6>
            <p className="small text-secondary mb-3">Download your latest report card here.</p>
            <button onClick={() => navigate('/student/result')} className="btn btn-light border px-4 py-1 fw-bold small shadow-sm">Download PDF</button>
          </div>
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '400px', height: '110px' }}>
            <img src={reportCardBanner} alt="Report Card" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>

        {/* Profile Management Section */}
        <h5 className="fw-bold mb-4 mt-2" style={{ color: '#081D32' }}>Profile Management</h5>
        <div className="d-flex align-items-center gap-4 mb-5 p-2">
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-1">Update Personal Profile</h6>
            <p className="small text-secondary mb-3">Keep your personal information current.</p>
            <button 
              onClick={() => navigate('/student/profile')}
              className="btn btn-light border px-4 py-1 fw-bold small shadow-sm"
            >
              Edit Profile &rarr;
            </button>
          </div>
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '400px', height: '110px' }}>
            <img src={profileMgmtBanner} alt="Profile Management" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;