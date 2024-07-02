import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to ReqSer</h1>
      <p>Your one-stop solution for service requests and offerings.</p>
      <Link to="/login" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
};

export default Index;