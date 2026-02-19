import React from 'react';

const Features = () => {
  const featureList = [
    {
      title: "Student Management",
      description: "Efficiently manage student records, including personal details, enrollment history, and academic progress. Easily search, filter, and update student information."
    },
    {
      title: "Attendance Tracking",
      description: "Monitor student attendance with a user-friendly interface. Generate attendance reports and identify students with attendance issues."
    },
    {
      title: "Exams & Results",
      description: "Manage exams, schedule assessments, and publish results seamlessly. Provide students with access to their exam schedules and results."
    },
    {
      title: "Fees Management",
      description: "Track and manage student fees, including payment history and outstanding balances. Generate fee reports and send reminders for overdue payments."
    },
    {
      title: "Teacher Management",
      description: "Manage teacher profiles, including contact information, qualifications, and assigned courses. Facilitate communication between teachers and administrators."
    },
    {
      title: "Reports & Analytics",
      description: "Generate comprehensive reports on student performance, attendance, fees, and other key metrics. Gain insights into institutional performance with visual analytics."
    },
    {
        title:"Role Based Access",
        description:"Control access to different features based on user roles, such as administrator, teacher, or student. Ensure data security and privacy with granular access controls."
    }
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="mb-5">
        <h1 className="fw-bold mb-3">Key Features</h1>
        <p className="text-primary fs-5 mb-5" style={{ opacity: 0.8 }}>
          Explore the core functionalities of our Student Management System designed to streamline academic administration and enhance communication within educational institutions.
        </p>
      </div>

      {/* Features List */}
      <div className="row">
        {featureList.map((feature, index) => (
          <div key={index} className="col-12 mb-5">
            <h4 className="fw-bold mb-3">{feature.title}</h4>
            <p className="text-secondary lh-lg" style={{ maxWidth: '900px' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// IMPORTANT: This fixes the SyntaxError in your browser console
export default Features;