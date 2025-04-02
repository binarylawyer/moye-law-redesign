import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import DirectEmergingTech from './DirectEmergingTech';

const EmergingTech: React.FC = () => {
  // Just directly render the Direct component
  return <DirectEmergingTech />;
};

export default EmergingTech; 