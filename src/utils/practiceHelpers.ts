// Helper functions for practice area components

/**
 * Standard interface for practice area content sections
 */
export interface ContentSection {
  title: string;
  description: string;
}

/**
 * Standard interface for related service links
 */
export interface RelatedService {
  title: string;
  path: string;
  description: string;
}

/**
 * Validates that a practice area ID matches with available specialized services
 * @param componentName The name of the component for logging
 * @param serviceId The service ID to validate
 */
export const validatePracticeArea = (componentName: string, serviceId: string): void => {
  // Import dynamically to avoid circular dependencies
  const { specializedServiceData } = require('@/data/practiceAreasData');
  
  console.log(`${componentName}: Validating practice area with ID "${serviceId}"`);
  
  // Check if service ID exists in specialized services
  const matchingService = specializedServiceData.find(
    (service: any) => service.id === serviceId
  );
  
  if (!matchingService) {
    console.warn(
      `${componentName}: WARNING - No matching specialized service found for "${serviceId}". ` +
      `Available services: ${specializedServiceData.map((s: any) => s.id).join(', ')}`
    );
  } else {
    console.log(`${componentName}: Successfully matched to specialized service "${matchingService.title}"`);
  }
};

/**
 * Standardizes paths for related services to ensure consistent navigation
 * @param services Array of related services to process
 * @returns Array with standardized paths
 */
export const standardizeServicePaths = (services: RelatedService[]): RelatedService[] => {
  return services.map(service => {
    // Ensure all paths are prefixed with /practice/
    if (!service.path.startsWith('/practice/')) {
      return {
        ...service,
        path: `/practice/${service.path.replace(/^\//, '')}`
      };
    }
    return service;
  });
}; 