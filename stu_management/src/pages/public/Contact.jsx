import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="mb-5">
        <h1 className="fw-bold mb-2">Contact Us</h1>
        <p className="text-secondary small">
          We're here to help! Reach out to us for any questions, support, or demo requests. Our team is dedicated to providing you with the best assistance possible.
        </p>
      </div>

      {/* Contact Information Grid */}
      <div className="mb-5">
        <h5 className="fw-bold mb-4">Contact Information</h5>
        <div className="row g-4">
          <div className="col-md-3">
            <label className="text-primary small fw-bold d-block mb-1">Email</label>
            <p className="small">support@edulink.com</p>
          </div>
          <div className="col-md-3">
            <label className="text-primary small fw-bold d-block mb-1">Phone</label>
            <p className="small">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <label className="text-primary small fw-bold d-block mb-1">Office Hours</label>
            <p className="small mb-0">Mon - Fri: 9 AM - 5 PM</p>
            <p className="small text-muted">(EST)</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-5 pt-3">
        <h5 className="fw-bold mb-4">Send Us a Message</h5>
        <form style={{ maxWidth: '450px' }}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Name</label>
            <input type="text" className="form-control bg-light border-0 py-2" placeholder="Your Name" />
          </div>
          
          <div className="mb-3">
            <label className="form-label small fw-bold">Email</label>
            <input type="email" className="form-control bg-light border-0 py-2" placeholder="Your Email" />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Phone Number</label>
            <input type="tel" className="form-control bg-light border-0 py-2" placeholder="Your Phone Number" />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold">Message</label>
            <textarea className="form-control bg-light border-0" rows="5" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="btn btn-login-gradient px-4 py-2 small fw-bold">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

// CRITICAL FIX: Ensures this component can be imported in App.jsx
export default Contact;