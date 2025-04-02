import React, { useEffect } from 'react';
import PracticeAreaPage from './PracticeAreaPage';
import { useLocation } from 'react-router-dom';
import { logger } from '@/utils/logger';

const IPConsulting: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log when component mounts
    logger.debug(`IPConsulting component mounted: ${location.pathname}`);
    
    // Clean up function
    return () => {
      logger.debug('IPConsulting component unmounted');
    };
  }, [location.pathname]);
  
  return <PracticeAreaPage />;
};

export default IPConsulting; 