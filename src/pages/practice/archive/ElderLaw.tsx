import React from 'react';
import PracticeAreaPage from './PracticeAreaPage';
import { useLocation } from 'react-router-dom';
import { logger } from '@/utils/logger';

const ElderLaw: React.FC = () => {
  const location = useLocation();
  
  // Log for debugging
  logger.debug(`ElderLaw component - Current path: ${location.pathname}`);
  
  return <PracticeAreaPage />;
};

export default ElderLaw; 