/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth } from './AuthContext';  
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user}</h2>
      <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
