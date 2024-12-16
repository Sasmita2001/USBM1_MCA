/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
function PrivateRoute({ children }) {
  const { user } = useAuth();


  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
