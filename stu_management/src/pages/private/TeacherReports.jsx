import React from 'react';
import TeacherNavbar from '../../components/common/TeacherNavbar';

// Assuming you have these illustrations in your assets folder
import attendanceReportImg from '../../assets/images/tr1.jpg';
import examPerformanceImg from '../../assets/images/tr2.jpg';
import studentProgressImg from '../../assets/images/tr3.jpg';

const TeacherReports = () => {
  const reportSections = [
    {
      title: 'Attendance',
      subtitle: 'Attendance report (class-wise)',
      description: 'View attendance reports for all classes you teach.',
      image: attendanceReportImg
    },
    {
      title: 'Exam Performance',
      subtitle: 'Exam performance report',
      description: 'View exam performance reports for all classes you teach.',
      image: examPerformanceImg
    },
    {
      title: 'Student Progress',
      subtitle: 'Student progress summary',
      description: 'View a summary of student progress across all subjects.',
      image: studentProgressImg
    }
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <TeacherNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-1" style={{ color: '#081D32' }}>Academic Reports</h2>
        <p className="text-secondary small mb-5">Generate and view reports related to attendance and academic performance.</p>

        {reportSections.map((section, index) => (
          <div key={index} className="mb-5">
            <h5 className="fw-bold mb-4" style={{ color: '#081D32' }}>{section.title}</h5>
            <div className="row align-items-center g-4">
              <div className="col-md-5">
                <h6 className="fw-bold mb-1 small">{section.subtitle}</h6>
                <p className="text-secondary mb-3" style={{ fontSize: '0.85rem' }}>{section.description}</p>
                <button className="btn btn-light border px-4 py-1 fw-bold small shadow-sm">
                  View Report &rarr;
                </button>
              </div>
              <div className="col-md-7">
                <div className="rounded-3 overflow-hidden shadow-sm" style={{ height: '180px' }}>
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-100 h-100 object-fit-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Global Action Footer */}
        <div className="d-flex justify-content-end gap-3 mt-5 pt-4 border-top">
          <button className="btn btn-light border px-4 py-2 fw-bold text-secondary shadow-sm">
            Download PDF
          </button>
          <button className="btn px-4 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#195898' }}>
            Share with Admin
          </button>
        </div>
      </main>
    </div>
  );
};

export default TeacherReports;