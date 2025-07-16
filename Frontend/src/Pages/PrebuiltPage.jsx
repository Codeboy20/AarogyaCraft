import React from 'react';
import { Link } from 'react-router-dom';
import './PrebuiltPage.css';

const PrebuiltPage = () => {
  const prebuiltSystems = [
    {
      title: "Basic System",
      description: "A straightforward solution for small-scale industries aiming for foundational automation.",
      imageUrl: "https://www.romexsoft.com/wp-content/uploads/2022/07/Cloud-Based-Solutions-1280x960-1.jpeg",
    },
    {
      title: "Intermediate System",
      description: "Enhance your industrial operations with intermediate automation solutions.",
      imageUrl: "https://suretyit.com.au/wp-content/uploads/2022/11/cloud-computing.jpg",
    },
    {
      title: "Advanced System",
      description: "For industries looking to advance their processes with cutting-edge technology.",
      imageUrl: "https://jessup.edu/wp-content/uploads/2024/01/Career-in-Cloud-Computing.jpg",
    },
    {
      title: "Fully Automated System",
      description: "Achieve maximum efficiency with a fully automated industrial system.",
      imageUrl: "https://webheadtech.com/wp-content/uploads/business-cloud-computing-1080x675.jpg",
    }
  ];

  return (
    <div className="prebuilt-page fade-in">
      <h1 className='h1-tag'>Pre-built Solutions</h1>

      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Intermediate</th>
              <th>Advanced</th>
              <th>Fully Automated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Automation</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Cloud Integration</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>SMS Alerts</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Insurance System</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Complete Automation</td>
              <td>❌</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prebuilt-grid">
        {prebuiltSystems.map((system, index) => (
          <div key={index} className="prebuilt-card">
            <img src={system.imageUrl} alt={system.title} className="prebuilt-image" />
            <div className="prebuilt-content">
              <h2>{system.title}</h2>
              <p>{system.description}</p>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="back-btn-wrapper">
        <Link to="/" className="btn back-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default PrebuiltPage;
