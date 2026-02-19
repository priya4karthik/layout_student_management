import React from 'react';
import StudentNavbar from '../../components/common/StudentNavbar';

const StudentResult = () => {
  // Data structure matching the results design
  const resultsData = [
    { 
      exam: 'Unit Test', 
      marks: 'Math: 90, Science: 85, English: 92', 
      total: 267, 
      status: 'Pass' 
    },
    { 
      exam: 'Mid Term', 
      marks: 'Math: 75, Science: 80, English: 78', 
      total: 233, 
      status: 'Pass' 
    },
    { 
      exam: 'Final', 
      marks: 'Math: 88, Science: 90, English: 85', 
      total: 263, 
      status: 'Pass' 
    },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <StudentNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>My Results</h2>

        <h5 className="fw-bold mb-4" style={{ color: '#081D32' }}>Exam Results</h5>

        {/* Results Table */}
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden mb-4">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Exam Name</th>
                  <th>Subject-wise Marks</th>
                  <th>Total Marks</th>
                  <th>Grade / Result Status</th>
                  <th className="pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {resultsData.map((res, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="ps-4 py-4 fw-medium text-dark">{res.exam}</td>
                    <td className="small" style={{ color: '#4D7399' }}>{res.marks}</td>
                    <td style={{ color: '#4D7399' }}>{res.total}</td>
                    <td>
                      {/* Green Pass Badge */}
                      <span className="badge px-4 py-2" style={{ backgroundColor: '#5CB85C', color: 'white', borderRadius: '8px' }}>
                        {res.status}
                      </span>
                    </td>
                    <td className="pe-4">
                      <button className="btn btn-link p-0 text-decoration-none small fw-bold" style={{ color: '#4D7399' }}>
                        View detailed result
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Action */}
        <div className="d-flex justify-content-end mt-5">
          <button className="btn btn-light border px-4 py-2 fw-bold shadow-sm" style={{ color: '#081D32' }}>
            Download marksheet (PDF)
          </button>
        </div>
      </main>
    </div>
  );
};

export default StudentResult;