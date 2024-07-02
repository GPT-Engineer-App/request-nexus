import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="index-container">
      <h1 className="index-title">Welcome to ReqSer</h1>
      <p className="index-description">Your one-stop solution for service requests and offerings.</p>
      <Link to="/login" className="index-button">
        Get Started
      </Link>
    </div>
  );
};

export default Index;