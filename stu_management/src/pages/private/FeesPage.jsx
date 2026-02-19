import React from 'react';
import AdminNavbar from '../../components/common/AdminNavbar';

const FeesPage = () => {
  // Data matching your Fee Structure design
  const feeStructure = [
    { class: 'Class 10', total: '$5000', paid: '$4500', pending: '$500' },
    { class: 'Class 11', total: '$6000', paid: '$5500', pending: '$500' },
    { class: 'Class 12', total: '$7000', paid: '$6500', pending: '$500' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <AdminNavbar />
      
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>Fees Management</h2>

        <h5 className="fw-bold mb-4">Fee Structure</h5>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden" style={{ border: '1px solid #dce3eb !important' }}>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #195898' }}>
                <tr className="text-secondary small fw-bold">
                  <th className="ps-4 py-3">Class</th>
                  <th>Total Fees</th>
                  <th>Paid</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((item, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="ps-4 py-4 fw-medium text-dark">{item.class}</td>
                    <td style={{ color: '#4D7399' }}>{item.total}</td>
                    <td style={{ color: '#4D7399' }}>{item.paid}</td>
                    <td style={{ color: '#4D7399' }}>{item.pending}</td>
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

export default FeesPage;