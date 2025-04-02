import React from 'react';
import PracticeAreaPage from './PracticeAreaPage';
import { useLocation, Navigate } from 'react-router-dom';
import { logger } from '@/utils/logger';

const SoftwareLicensing: React.FC = () => {
  const location = useLocation();
  
  // Log for debugging
  logger.debug(`SoftwareLicensing component - Current path: ${location.pathname}`);
  
  return <PracticeAreaPage />;
};

export default SoftwareLicensing; 