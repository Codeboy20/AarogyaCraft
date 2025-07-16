import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome, FaArrowRight, FaCheckCircle,
  FaBuilding, FaLightbulb, FaHandPointDown
} from 'react-icons/fa';
import './CustomPage.css';

const industryIntegrations = {
  Education: ['SMS', 'Cloud', 'AI Automation'],
  Healthcare: ['SMS', 'Insurance System', 'AI Automation'],
  Finance: ['Cloud', 'AI Automation'],
  Banking: ['SMS', 'Cloud', 'Insurance System'],
  Technology: ['Cloud', 'AI Automation'],
};

const CustomPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    setSelectedIntegrations([]);
  };

  return (
    <div className="custom-page fade-in">
      <h1 className="title">
        <FaBuilding style={{ marginRight: '10px' }} />
        Design your own Ecosystem
      </h1>

      <p className="disclaimer">
        Disclaimer: Before visiting custom, we request you to choose first visit prebuilt.
      </p>

      <form action="https://formspree.io/f/mzzgnzwl" method="POST">
        <input type="hidden" name="_subject" value="New Custom Ecosystem Submission" />
        {selectedIndustry && <input type="hidden" name="industry" value={selectedIndustry} />}
        {selectedIntegrations.map((item, idx) => (
          <input key={idx} type="hidden" name="integrations[]" value={item} />
        ))}

        <div className="industry-buttons">
          {Object.keys(industryIntegrations).map((industry) => (
            <button
              key={industry}
              type="button"
              className={`details-btn ${selectedIndustry === industry ? 'selected' : ''}`}
              onClick={() => handleIndustryClick(industry)}
            >
              <FaHandPointDown style={{ marginRight: '6px' }} />
              {industry}
            </button>
          ))}
        </div>

        <div className="input-row">
          <div className="input-section">
            <label className="input-label">
              <FaBuilding style={{ marginRight: '5px' }} />
              Tell us about your organization
            </label>
            <textarea
              name="organizationInfo"
              placeholder="Enter organization details..."
              required
            />
          </div>

          <div className="input-section">
            <label className="input-label">
              <FaLightbulb style={{ marginRight: '5px' }} />
              Describe your vision
            </label>
            <textarea
              name="visionInfo"
              placeholder="Enter your vision..."
              required
            />
          </div>
        </div>

        {selectedIndustry && (
          <div className="integration-section">
            <h3>
              <FaCheckCircle style={{ marginRight: '8px' }} />
              Choose services integration
            </h3>
            <div className="checkboxes">
              {industryIntegrations[selectedIndustry].map((service) => (
                <label key={service} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="visibleCheckbox"
                    value={service}
                    checked={selectedIntegrations.includes(service)}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      setSelectedIntegrations((prev) =>
                        checked ? [...prev, value] : prev.filter((item) => item !== value)
                      );
                    }}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="form-buttons">
          <button type="submit" className="details-btn">
            <FaArrowRight style={{ marginRight: '6px' }} />
            Submit
          </button>
        </div>

        <div className="form-buttons">
          <Link to="/prebuilt" className="details-btn gray-btn">
            <FaArrowRight style={{ marginRight: '6px' }} />
            Visit Prebuilt Page
          </Link>
        </div>

        <Link to="/" className="details-btn gray-btn">
          <FaHome style={{ marginRight: '6px' }} />
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default CustomPage;
