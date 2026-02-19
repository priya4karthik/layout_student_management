import React from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';

const SettingsPage = () => {
  const settingsOptions = [
    {
      title: 'Edit Profile',
      description: 'Manage your personal information',
      icon: 'bi-person',
      path: '/admin/settings/profile'
    },
    {
      title: 'Change Password',
      description: 'Change your account password',
      icon: 'bi-lock',
      path: '/admin/settings/password'
    },
    {
      title: 'Logout',
      description: '',
      icon: 'bi-box-arrow-right',
      path: '/logout'
    }
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <AdminNavbar />
      
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>Account Settings</h2>

        <div className="card shadow-sm border-0 rounded-3">
          <div className="list-group list-group-flush">
            {settingsOptions.map((item, index) => (
              <div 
                key={index} 
                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between py-4 border-light px-4"
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center me-3" 
                    style={{ width: '48px', height: '48px', backgroundColor: '#f8f9fa' }}
                  >
                    <i className={`bi ${item.icon} fs-4`} style={{ color: '#081D32' }}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{item.title}</h6>
                    {item.description && (
                      <p className="small mb-0" style={{ color: '#4D7399' }}>{item.description}</p>
                    )}
                  </div>
                </div>
                <i className="bi bi-chevron-right text-secondary"></i>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;