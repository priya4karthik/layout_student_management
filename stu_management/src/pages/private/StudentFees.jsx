import React from 'react';
import StudentNavbar from '../../components/common/StudentNavbar';

const StudentFees = () => {
  // Data for financial summary cards
  const feeCards = [
    { title: 'Total Fees', amount: '$12,000' },
    { title: 'Paid Amount', amount: '$8,000' },
    { title: 'Pending Amount', amount: '$4,000' },
    { title: 'Due Date', amount: 'July 31, 2024' },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      <StudentNavbar />
      <main className="container py-4">
        <h2 className="fw-bold mb-5" style={{ color: '#081D32' }}>Fees Details</h2>

        {/* Financial Summary Row */}
        <div className="row g-4 mb-5">
          {feeCards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 border-primary-subtle shadow-sm p-4 rounded-3">
                <p className="small mb-2 text-secondary fw-bold">{card.title}</p>
                <h3 className="fw-bold mb-0 text-dark">{card.amount}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Action Buttons */}
        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-light border px-4 py-2 fw-bold text-dark shadow-sm">
            View Payment History
          </button>
          <button className="btn px-4 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#081D32' }}>
            Download Receipt
          </button>
        </div>

        {/* Primary Payment Action */}
        <div>
          <button className="btn px-5 py-2 text-white fw-bold shadow-sm" style={{ backgroundColor: '#195898' }}>
            Pay Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default StudentFees;