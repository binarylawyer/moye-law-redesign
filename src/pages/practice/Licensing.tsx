import React from 'react';
import PracticeAreaPage from './PracticeAreaPage';
import { useLocation, Navigate } from 'react-router-dom';

const Licensing: React.FC = () => {
  const location = useLocation();
  
  // Redirect to the ip-licensing path to ensure consistent routing
  if (location.pathname === '/practice/licensing') {
    return <Navigate to="/practice/ip-licensing" replace />;
  }
  
  return <PracticeAreaPage />;
};

export default Licensing; 