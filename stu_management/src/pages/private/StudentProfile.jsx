import React from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';
import studentLogo from '../../assets/images/studentprofile.jpg';

const StudentProfile = () => {
  // Mock data matching your reference image
  const student = {
    name: "Sophia Clark",
    id: "2023001",
    class: "12th Grade",
    personal: {
      fullName: "Sophia Clark",
      dob: "July 15, 2004",
      gender: "Female",
      address: "123 Maple Street, Anytown, USA",
      phone: "(555) 123-4567",
      email: "sophia.clark@email.com"
    },
    academic: {
      class: "12th Grade",
      roll: "101",
      admissionDate: "August 20, 2022",
      subjects: "Math, Science, English, History",
      grade: "A",
      gpa: "3.8"
    },
    attendance: { total: 150, attended: 140, percentage: "93%" },
    marks: [
      { subject: "Math", obtained: 95, total: 100, grade: "A+" },
      { subject: "Science", obtained: 88, total: 100, grade: "B+" },
      { subject: "English", obtained: 92, total: 100, grade: "A" },
      { subject: "History", obtained: 90, total: 100, grade: "A-" }
    ],
    fees: { total: "$5,000", paid: "$4,500" }
  };

  return (
    <div className="bg-white min-vh-100 pb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <AdminNavbar />
      
      <main className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-secondary me-3" style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
              <img src={studentLogo} alt="Profile" className="w-100 h-100 object-fit-cover" />
            </div>
            <div>
              <h4 className="fw-bold mb-0">{student.name}</h4>
              <p className="text-secondary small mb-0">Student ID: {student.id}</p>
              <p className="text-secondary small mb-0">Class: {student.class}</p>
            </div>
          </div>
          <button className="btn btn-light border px-4 py-2 fw-bold shadow-sm">Edit Details</button>
        </div>

        {/* Personal Details */}
        <section className="mb-5">
          <h6 className="fw-bold mb-3 border-bottom pb-2">Personal Details</h6>
          <div className="row g-4">
            <div className="col-md-4"><label className="small text-secondary">Full Name</label><p className="fw-medium">{student.personal.fullName}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Date of Birth</label><p className="fw-medium">{student.personal.dob}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Gender</label><p className="fw-medium">{student.personal.gender}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Address</label><p className="fw-medium">{student.personal.address}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Phone Number</label><p className="fw-medium">{student.personal.phone}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Email</label><p className="fw-medium">{student.personal.email}</p></div>
          </div>
        </section>

        {/* Academic Details */}
        <section className="mb-5">
          <h6 className="fw-bold mb-3 border-bottom pb-2">Academic Details</h6>
          <div className="row g-4">
            <div className="col-md-4"><label className="small text-secondary">Class</label><p className="fw-medium">{student.academic.class}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Roll Number</label><p className="fw-medium">{student.academic.roll}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Admission Date</label><p className="fw-medium">{student.academic.admissionDate}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Subjects</label><p className="fw-medium">{student.academic.subjects}</p></div>
            <div className="col-md-4"><label className="small text-secondary">Grade</label><p className="fw-medium">{student.academic.grade}</p></div>
            <div className="col-md-4"><label className="small text-secondary">GPA</label><p className="fw-medium">{student.academic.gpa}</p></div>
          </div>
        </section>
<h6 className="fw-bold mb-3">Attendance Details</h6>
        {/* Summaries (Attendance, Marks Table, Fees) */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm border">
              <label className="small text-secondary">Total Classes</label>
              <h3 className="fw-bold">{student.attendance.total}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm border">
              <label className="small text-secondary">Classes Attended</label>
              <h3 className="fw-bold">{student.attendance.attended}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm border">
              <label className="small text-secondary">Attendance Percentage</label>
              <h3 className="fw-bold">{student.attendance.percentage}</h3>
            </div>
          </div>
        </div>

        {/* Marks Summary */}
        <section className="mb-5">
          <h6 className="fw-bold mb-3">Marks Summary</h6>
          <div className="card shadow-sm border">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr className="small text-secondary">
                  <th>Subject</th><th>Marks Obtained</th><th>Total Marks</th><th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {student.marks.map((m, i) => (
                  <tr key={i}>
                    <td>{m.subject}</td><td className="text-primary">{m.obtained}</td><td>{m.total}</td><td className="text-primary">{m.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fee Status */}
        <section className="mb-4">
          <h6 className="fw-bold mb-3">Fee Status</h6>
          <div className="row g-4">
            <div className="col-md-6"><div className="card p-3 border shadow-sm"><label className="small text-secondary">Total Fees</label><h3 className="fw-bold">{student.fees.total}</h3></div></div>
            <div className="col-md-6"><div className="card p-3 border shadow-sm"><label className="small text-secondary">Fees Paid</label><h3 className="fw-bold">{student.fees.paid}</h3></div></div>
          </div>
        </section>

        <div className="text-center mt-4">
          <button className="btn btn-light border px-4 py-2 fw-bold shadow-sm">Download Report</button>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;