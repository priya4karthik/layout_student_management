import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import About from './pages/public/About';

// PAGE IMPORTS - Import your actual files here
import Home from './pages/public/Home'; // Make sure filename is Home.jsx
import Login from './pages/auth/Login'; // Make sure filename is Login.jsx
import Features from './pages/public/Features';
import Contact from './pages/public/Contact';
import AdminDashboard from './pages/private/AdminDashboard';
import TeachersPage from './pages/private/TeachersPage';
import StudentsPage from './pages/private/StudentsPage';
import StudentProfile from './pages/private/StudentProfile';
import AttendancePage from './pages/private/AttendancePage';
import ExamsPage from './pages/private/ExamsPage';
import FeesPage from './pages/private/FeesPage';
import SettingsPage from './pages/private/SettingsPage';
import TeacherDashboard from './pages/private/TeacherDashboard';
import TeacherAttendance from './pages/private/TeacherAttendance';
import TeacherMarks from './pages/private/TeacherMarks';
import TeacherClasses from './pages/private/TeacherClasses';
import TeacherReports from './pages/private/TeacherReports';
import TeacherProfile from './pages/private/TeacherProfile';
import StudentDashboard from './pages/private/StudentDashboard';
import StudentAttendance from './pages/private/StudentAttendance';
import StudentResult from './pages/private/StudentResult';
import StudentFees from './pages/private/StudentFees';
import StudentProfiles from './pages/private/studentProfiles';
// import PrivacyPolicy from './pages/public/PrivacyPolicy';
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Step 1: REMOVE <Navbar /> from here */}

        <main className="flex-grow-1">
          <Routes>
            {/* Step 2: Manually add <Navbar /> ONLY to the public pages */}
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/features" element={<><Navbar /><Features /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/privacy" element={<><Navbar/><PrivacyPolicy/></>}/> */}

            {/* Step 3: The Admin Dashboard remains clean. 
                It will use its own AdminNavbar inside the component. */}
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            
            {/* New Sub-Pages for the Admin Menu */}
            <Route path="/admin/teachers" element={<TeachersPage />} />
            <Route path="/admin/students" element={<StudentsPage />} />
            <Route path="/admin/student-profile" element={<StudentProfile />} />
            <Route path="/admin/attendance" element={<AttendancePage/>}/>
            <Route path="/admin/exams" element={<ExamsPage />} />
            <Route path="/admin/fees" element={<FeesPage />} />
            <Route path="/admin/settings" element={<SettingsPage />} />


            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/attendance" element={<TeacherAttendance />} />
            <Route path="/teacher/marks" element={<TeacherMarks />} />
            <Route path="/teacher/classes" element={<TeacherClasses />} />
            <Route path="/teacher/reports" element={<TeacherReports/>}/>
            <Route path="/teacher/profile" element={<TeacherProfile />} />



           <Route path="dashboard/student" element={<StudentDashboard/>} />
           <Route path="/student/attendance" element={<StudentAttendance />} />
           <Route path="/student/result" element={<StudentResult />} />
           <Route path="/student/fees" element={<StudentFees />} />
           <Route path="/student/profile" element={<StudentProfiles/>}/>
          </Routes>
        </main>
        
        {/* Footer stays here because you want it on every page */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;