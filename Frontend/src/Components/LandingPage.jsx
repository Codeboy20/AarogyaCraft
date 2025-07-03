import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Industries from "./Industries";
import CustomButtons from "./CustomButtons";
import PrebuiltButtons from "./PrebuiltButtons"; 
import CustomPage from "../pages/CustomPage"; 
import PrebuiltPage from "../pages/PrebuiltPage"; 
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route path="/prebuilt" element={<PrebuiltPage />} />
      </Routes>
    </div>
  );
};

const Home = () => (
  <div className="home">
    <div className="hero">
      <Hero />
      <Industries />
    </div>

    <div className="solutions">
      <h1>
        <span>Tailored Management Systems</span>
        {/* <span className="line2">for Every Industry</span> */}
      </h1>
      <p>
        <span><b>
          Discover our innovative management systems designed to streamline
          operations across various.</b>
        </span>
        <span><b>
          sectors. Whether you need a custom solution or a pre-built option, we
          have you covered.</b>
        </span>
      </p>
      {/* Features Section */}  
          <div className="features">
       <div className="feature">
        <h2>Custom Solutions Tailored to Your Needs</h2>
          <p>
            <ul>
              <li>
                <strong>Tailored Solutions:</strong> Custom-built systems to
                address your specific business needs.
              </li>
              <li>
                <strong>Workflow Optimization:</strong> Simplify operations and
                eliminate inefficiencies.
              </li>
              <li>
                <strong>Enhanced Productivity:</strong> Boost output with
                innovative, user-friendly tools.
              </li>
              <li>
                <strong>Scalable Design:</strong> Solutions that grow with your
                business.
              </li>
              <li>
                <strong>Cost Efficiency:</strong> Save time and resources with
                automation.
              </li>
            </ul>
          </p>
        </div>
        <div className="feature">
          <h2>Pre-built Solutions for Quick Implementation</h2>
          <p>
            <ul>
              <li>
                <strong>Ready-to-Use Modules:</strong> Pre-designed solutions
                for rapid deployment.
              </li>
              <li>
                <strong>Quick Setup:</strong> Save time with hassle-free
                implementation.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Affordable solutions without
                compromising quality.
              </li>
              <li>
                <strong>Scalable Design:</strong> Easily expandable as your
                business grows.
              </li>
              <li>
                <strong>Industry-Specific:</strong> Tailored for diverse sectors
                and needs.
              </li>
            </ul>
          </p>
        </div>
        <div className="feature">
          <h2>Explore Our Diverse Industry Offerings</h2>
          <p>
            <ul>
              <li>
                <strong>Healthcare Solutions:</strong> Streamlined management
                for hospitals and clinics.
              </li>
              <li>
                <strong>Education Systems:</strong> Enhanced tools for schools
                and universities.
              </li>
              <li>
                <strong>Retail Platforms:</strong> Efficient inventory and sales
                tracking.
              </li>
              <li>
                <strong>Manufacturing Tools:</strong> Simplified production and
                supply chain management.
              </li>
              <li>
                <strong>Finance Services:</strong> Secure and automated
                processes.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="buttons">
        <CustomButtons />
        <PrebuiltButtons />
      </div>
    </div>
  </div>
);

export default LandingPage;
