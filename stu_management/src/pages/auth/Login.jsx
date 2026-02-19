import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role) {
      // Navigates to the selected role's dashboard
      navigate(`/dashboard/${role}`);
    } else {
      alert("Please select a role before logging in.");
    }
  };

  return (
    <div className="login-bg d-flex align-items-center justify-content-center">
      <div className="text-center w-100" style={{ maxWidth: '550px', padding: '20px' }}>
        
        {/* Logo Section */}
        <div className="mb-4 d-flex align-items-center justify-content-center">
          <div className="logo-container me-2">
            <div className="logo-bar-tall bg-white"></div>
            <div className="logo-bar-wide bg-white"></div>
          </div>
          <span className="text-white fs-4 fw-bold">EduLink</span>
        </div>

        <h2 className="text-white mb-5 fw-normal">Welcome to EduLink</h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <input 
              type="email" 
              className="form-control login-input" 
              placeholder="Email" 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input 
              type="password" 
              className="form-control login-input" 
              placeholder="Password" 
              required 
            />
          </div>

          {/* Role Dropdown */}
          <div className="mb-5">
            <select 
              className="form-select login-input" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-login-blue px-5 py-2 fw-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;