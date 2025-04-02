import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { standardizeServicePaths } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';
import { specializedServiceData } from '@/data/practiceAreasData';

// Simplified direct approach to get service by URL path segment
const getServiceByPathSegment = (pathSegment: string) => {
  // Log for debugging
  logger.debug(`Looking for service with path segment: ${pathSegment}`);
  logger.debug(`Available services: ${specializedServiceData.map(s => s.id).join(', ')}`);
  
  // Special case for IP licensing
  if (pathSegment === 'licensing') {
    pathSegment = 'ip-licensing';
  }
  
  // Direct match by ID
  const service = specializedServiceData.find(service => service.id === pathSegment);
  
  if (service) {
    logger.debug(`Found service by direct ID match: ${service.id}`);
    return service;
  }
  
  logger.debug(`No service found for path segment: ${pathSegment}`);
  return null;
};

const PracticeAreaPage: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const location = useLocation();
  const [serviceData, setServiceData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Try to get path segment from URL
    let pathSegment = area;
    
    if (!pathSegment) {
      const pathParts = location.pathname.split('/');
      pathSegment = pathParts[pathParts.length - 1];
    }
    
    // Log for debugging
    logger.debug(`Current URL: ${location.pathname}`);
    logger.debug(`Path segment: ${pathSegment}`);
    
    if (!pathSegment) {
      setError('No practice area specified in URL');
      return;
    }
    
    // Get service data directly
    const service = getServiceByPathSegment(pathSegment);
    
    if (service) {
      setServiceData(service);
    } else {
      setError(`Practice area '${pathSegment}' not found`);
    }
  }, [area, location.pathname]);
  
  if (error) {
    return (
      <PracticeAreaTemplate areaName="Practice Area Not Found">
        <div className="py-12 text-center">
          <h2 className="text-2xl font-display mb-4">Error Loading Practice Area</h2>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-500 mt-4">Path: {location.pathname}</p>
        </div>
      </PracticeAreaTemplate>
    );
  }
  
  if (!serviceData) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }
  
  return (
    <PracticeAreaTemplate
      areaName={serviceData.title}
      serviceId={serviceData.id}
    >
      <PracticeAreaHero
        title={serviceData.title}
        subtitle={serviceData.subtitle || serviceData.shortTitle}
        description={serviceData.description}
        imagePath={serviceData.imagePath || `/images/${serviceData.id}.jpg`}
      />
      
      {serviceData.content && serviceData.content.length > 0 && (
        <PracticeAreaContent 
          title={`Specialized ${serviceData.areaOfPractice || serviceData.title} Services`}
          sections={serviceData.content}
        />
      )}
      
      {serviceData.featureContent && (
        <ServiceWithFeatureImage
          serviceTitle={serviceData.featureContent.title}
          serviceDescription={serviceData.featureContent.description}
          imagePath={serviceData.featureContent.imagePath || `/images/${serviceData.id}.jpg`}
          variant="primary"
        />
      )}
      
      {serviceData.process && serviceData.process.length > 0 && (
        <PracticeAreaProcess
          title={`Our ${serviceData.title} Approach`}
          description={serviceData.processDescription || `We implement a structured methodology for ${serviceData.title.toLowerCase()} that delivers results.`}
          steps={serviceData.process}
        />
      )}
      
      {serviceData.relatedServices && serviceData.relatedServices.length > 0 && (
        <PracticeAreaRelated
          title={`Related ${serviceData.title} Services`}
          services={standardizeServicePaths(serviceData.relatedServices)}
        />
      )}
    </PracticeAreaTemplate>
  );
};

export default PracticeAreaPage; 