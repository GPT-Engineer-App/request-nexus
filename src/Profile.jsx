import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Email: {currentUser.email}</p>
    </div>
  );
};

export default Profile;