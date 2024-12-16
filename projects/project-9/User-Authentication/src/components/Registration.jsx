/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuth } from './AuthContext';  
import { useNavigate } from 'react-router-dom';

function Registration() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;