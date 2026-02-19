import React from 'react';
import TeacherNavbar from '../../components/common/TeacherNavbar';
import StuPer from '../../assets/images/teacher4.jpg'; 
import StuPer1 from '../../assets/images/teacher5.jpg'; 
// import reportsImg from '../../assets/images/report-illustration.png';

const TeacherDashboard = () => {
  const myClasses = [
    { id: 1, grade: 'Class 10A', subject: 'Mathematics', teacher: 'Mrs. Emily Carter', color: '#f8f9fa' },
    { id: 2, grade: 'Class 11 B', subject: 'Physics', teacher: 'Mr. David Lee', color: '#7FB3B3' },
    { id: 3, grade: 'Class 12 C', subject: 'Chemistry', teacher: 'Mr. Sarah Jones', color: '#106363' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      
      <main className="container py-4">
        <h2 className="fw-bold mb-1" style={{ color: '#081D32' }}>Teacher Dashboard</h2>
        <p className="text-secondary mb-5">Manage your classes, attendance, and student marks efficiently.</p>

        {/* Quick Actions */}
        <div className="mb-5">
          <h5 className="fw-bold mb-3">Quick Actions</h5>
          <div className="d-flex gap-3">
            <button className="btn px-4 py-2 fw-bold text-white" style={{ backgroundColor: '#195898' }}>Mark Attendance</button>
            <button className="btn btn-light border px-4 py-2 fw-bold shadow-sm">Enter Marks</button>
          </div>
        </div>

        {/* My Classes Grid */}
        <div className="rounded-3 p-3 mb-4 text-center fw-bold fs-5" style={{ backgroundColor: '#DCE6F0', color: '#081D32' }}>
          My Classes
        </div>

        <div className="row g-4">
          {myClasses.map((cls) => (
            <div className="col-md-4" key={cls.id}>
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <div className="p-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: cls.color, height: '200px' }}>
                   {/* Placeholder for Subject Image/Icon */}
                   <div className="bg-white p-3 shadow-sm border text-center small" style={{ width: '80%' }}>
                     <h6 className="mb-0 fw-bold">{cls.subject.toUpperCase()}</h6>
                     <hr className="my-1"/>
                     <div style={{fontSize: '0.6rem'}} className="text-muted text-start">Formula: A + B...</div>
                   </div>
                </div>
                <div className="card-body">
                  <p className="small mb-1 text-primary">{cls.grade}</p>
                  <h5 className="fw-bold mb-1">{cls.subject}</h5>
                  <p className="text-secondary small mb-0">{cls.teacher}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Student Performance Section */}
        <div className="rounded-3 p-3 mt-5 mb-4 text-center fw-bold fs-5" style={{ backgroundColor: '#DCE6F0', color: '#081D32' }}>
          Student performance
        </div>

        <div className="d-flex align-items-center gap-4 mb-5 p-2">
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '220px', height: '140px' }}>
            {/* Replace with your local performance image */}
            <img 
              src={StuPer} 
              alt="Performance" 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>
          <div>
            <h6 className="fw-bold mb-1">View Student Performance</h6>
            <p className="small text-secondary mb-0">
              Analyze individual student progress and identify areas for improvement.
            </p>
          </div>
        </div>

        {/* Reports Section */}
        <div className="rounded-3 p-3 mt-5 mb-4 text-center fw-bold fs-5" style={{ backgroundColor: '#DCE6F0', color: '#081D32' }}>
          Reports
        </div>

        <div className="d-flex align-items-center gap-4 p-2">
          <div className="rounded-3 overflow-hidden shadow-sm" style={{ width: '220px', height: '140px' }}>
            {/* Replace with your local report image */}
            <img 
              src={StuPer1}
              alt="Class Report" 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>
          <div>
            <h6 className="fw-bold mb-1">Download Class Reports</h6>
            <p className="small text-secondary mb-0">
              Generate and download detailed reports for each class, including attendance and marks.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;