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
  description?: string;
}

// Validation rules for service IDs
const SERVICE_ID_PATTERN = /^[a-z0-9-]+$/;
const VALID_SERVICE_ID_LENGTH = { min: 3, max: 50 };

/**
 * Validates a service ID format
 * @param serviceId The service ID to validate
 * @returns Object containing validation result and error message if invalid
 */
export const validateServiceIdFormat = (serviceId: string): { isValid: boolean; error?: string } => {
  if (!serviceId) {
    return { isValid: false, error: 'Service ID cannot be empty' };
  }

  if (serviceId.length < VALID_SERVICE_ID_LENGTH.min || serviceId.length > VALID_SERVICE_ID_LENGTH.max) {
    return { 
      isValid: false, 
      error: `Service ID must be between ${VALID_SERVICE_ID_LENGTH.min} and ${VALID_SERVICE_ID_LENGTH.max} characters`
    };
  }

  if (!SERVICE_ID_PATTERN.test(serviceId)) {
    return { 
      isValid: false, 
      error: 'Service ID must contain only lowercase letters, numbers, and hyphens'
    };
  }

  return { isValid: true };
};

/**
 * Normalizes a service ID to ensure consistent format
 * @param id The service ID to normalize
 * @returns Normalized service ID
 */
export const normalizeServiceId = (id: string = ''): string => {
  if (!id) return '';
  
  // Convert to lowercase, replace spaces and special characters with hyphens,
  // and remove any duplicate hyphens
  const normalized = id
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, '');   // Remove leading and trailing hyphens
  
  return normalized;
};

/**
 * Gets the service data by ID from specialized services
 * @param serviceId The service ID to look up
 * @returns Service data if found, undefined otherwise
 */
export const getServiceById = (serviceId: string): any | undefined => {
  try {
    if (!serviceId) return undefined;
    
    // Normalize the service ID
    const normalizedId = normalizeServiceId(serviceId);
    
    // Import dynamically to avoid circular dependencies
    const { specializedServiceData } = require('@/data/practiceAreasData');
    
    // First try exact match with normalized ID
    const exactMatch = specializedServiceData.find(
      (service: any) => normalizeServiceId(service.id) === normalizedId
    );
    
    if (exactMatch) {
      logger.debug(`Found exact match for service "${normalizedId}":`, exactMatch.title);
      return exactMatch;
    }
    
    // Try matching by title
    const titleMatch = specializedServiceData.find((service: any) => {
      const normalizedTitle = normalizeServiceId(service.title);
      const normalizedShortTitle = service.shortTitle ? normalizeServiceId(service.shortTitle) : '';
      
      return normalizedTitle === normalizedId || normalizedShortTitle === normalizedId;
    });
    
    if (titleMatch) {
      logger.debug(`Found title match for service "${normalizedId}":`, titleMatch.title);
      return titleMatch;
    }
    
    logger.debug(`No service found for ID "${normalizedId}"`);
    return undefined;
  } catch (error) {
    logger.error(`Error getting service data for ID "${serviceId}":`, error);
    return undefined;
  }
};

/**
 * Gets the service path from an ID, ensuring consistent navigation
 * @param serviceId The service ID to get the path for
 * @returns The standardized path for the service
 */
export const getServicePath = (serviceId: string): string => {
  try {
    // Normalize the service ID
    const normalizedId = normalizeServiceId(serviceId);
    
    // Check if it's a known service ID using the specializedServicePathMap
    const { specializedServicePathMap } = require('@/data/practiceAreasData');
    
    if (specializedServicePathMap && normalizedId in specializedServicePathMap) {
      const path = specializedServicePathMap[normalizedId];
      logger.debug(`Found path mapping for service "${normalizedId}":`, path);
      return path;
    }
    
    // Default to /practice/ prefix if not found in map
    logger.debug(`No path mapping found for service "${normalizedId}", using default pattern`);
    return `/practice/${normalizedId}`;
  } catch (error) {
    logger.error(`Error getting service path for "${serviceId}":`, error);
    // Return a safe default value
    return `/practice/${normalizeServiceId(serviceId)}`;
  }
};

/**
 * Validates that a practice area ID matches with available specialized services
 * @param componentName The name of the component for logging
 * @param serviceId The service ID to validate
 * @returns Validation result object
 */
export const validatePracticeArea = (componentName: string, serviceId: string): {
  isValid: boolean;
  service?: any;
  message?: string;
} => {
  try {
    // First validate the format
    const formatValidation = validateServiceIdFormat(serviceId);
    if (!formatValidation.isValid) {
      logger.warn(`${componentName}: ${formatValidation.error} for "${serviceId}"`);
      return { isValid: false, message: formatValidation.error };
    }
    
    // Import dynamically to avoid circular dependencies
    const { specializedServiceData } = require('@/data/practiceAreasData');
    
    logger.debug(`${componentName}: Validating practice area with ID "${serviceId}"`);
    
    // Use the extracted business logic to get the service
    const matchingService = getServiceById(serviceId);
    
    if (!matchingService) {
      const message = `No matching specialized service found for "${serviceId}". ` +
      `Available services: ${specializedServiceData.map((s: any) => s.id).join(', ')}`;
      
      logger.warn(`${componentName}: WARNING - ${message}`);
      return { isValid: false, message };
    }
    
    logger.debug(`${componentName}: Successfully matched to specialized service "${matchingService.title}"`);
    return { isValid: true, service: matchingService };
  } catch (error) {
    logger.error(`Error validating practice area "${serviceId}" in ${componentName}:`, error);
    // Return invalid with an error message
    return { 
      isValid: false,
      message: `An error occurred while validating the practice area`
    };
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