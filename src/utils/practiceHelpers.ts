// Helper functions for practice area components
import { logger } from './logger';

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
 * Gets the service path from an ID, ensuring consistent navigation
 * @param serviceId The service ID to get the path for
 * @returns The standardized path for the service
 */
export const getServicePath = (serviceId: string): string => {
  try {
    // Normalize the service ID by removing any leading/trailing slashes
    const normalizedId = serviceId.replace(/^\/|\/$/g, '');
    
    // Check if it's a known service ID using the specializedServicePathMap
    const { specializedServicePathMap } = require('@/data/practiceAreasData');
    
    if (specializedServicePathMap && normalizedId in specializedServicePathMap) {
      logger.debug(`Found path mapping for service "${normalizedId}":`, specializedServicePathMap[normalizedId]);
      return specializedServicePathMap[normalizedId];
    }
    
    // Default to /practice/ prefix if not found in map
    logger.debug(`No path mapping found for service "${normalizedId}", using default pattern`);
    return `/practice/${normalizedId}`;
  } catch (error) {
    logger.error(`Error getting service path for "${serviceId}":`, error);
    // Return a safe default value
    return `/practice/${serviceId.replace(/^\/|\/$/g, '')}`;
  }
};

/**
 * Validates that a practice area ID matches with available specialized services
 * @param componentName The name of the component for logging
 * @param serviceId The service ID to validate
 */
export const validatePracticeArea = (componentName: string, serviceId: string): void => {
  try {
    // Import dynamically to avoid circular dependencies
    const { specializedServiceData } = require('@/data/practiceAreasData');
    
    logger.debug(`${componentName}: Validating practice area with ID "${serviceId}"`);
    
    // Check if service ID exists in specialized services
    const matchingService = specializedServiceData.find(
      (service: any) => service.id === serviceId
    );
    
    if (!matchingService) {
      logger.warn(
        `${componentName}: WARNING - No matching specialized service found for "${serviceId}". ` +
        `Available services: ${specializedServiceData.map((s: any) => s.id).join(', ')}`
      );
    } else {
      logger.debug(`${componentName}: Successfully matched to specialized service "${matchingService.title}"`);
    }
  } catch (error) {
    logger.error(`Error validating practice area "${serviceId}" in ${componentName}:`, error);
    // Continue execution even if validation fails
  }
};

/**
 * Standardizes paths for related services to ensure consistent navigation
 * @param services Array of related services to process
 * @returns Array with standardized paths
 */
export const standardizeServicePaths = (services: RelatedService[]): RelatedService[] => {
  try {
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
  } catch (error) {
    logger.error('Error standardizing service paths:', error);
    // Return original services if there's an error
    return services;
  }
}; 