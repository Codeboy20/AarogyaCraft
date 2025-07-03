import React from 'react';
import { Link } from 'react-router-dom';

const CustomPage = () => (
  <div className="page">
    <h1>Custom Solutions</h1>
    <p>Here you can explore custom solutions tailored to your industry needs.</p>
    <Link to="/" className="btn">Back to Home</Link>
  </div>
);

export default CustomPage;
