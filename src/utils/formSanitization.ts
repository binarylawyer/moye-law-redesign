/**
 * Utility functions for sanitizing user input from forms
 * Helps protect against XSS attacks, HTML injection, and other security vulnerabilities
 */

import DOMPurify from 'dompurify';
import { logger } from './logger';

/**
 * Sanitizes a string input using DOMPurify
 * @param input The string input to sanitize
 * @returns Sanitized string with HTML characters escaped
 */
export const sanitizeString = (input: string): string => {
  if (!input) return '';
  
  try {
    // Remove any potentially dangerous HTML
    const sanitized = DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [], // Don't allow any HTML tags
      ALLOWED_ATTR: [], // Don't allow any HTML attributes
    });
    
    return sanitized;
  } catch (error) {
    logger.error('Error sanitizing string input:', error);
    // Return a safe empty string or the input with HTML escaped
    return input.replace(/[<>]/g, (c) => c === '<' ? '&lt;' : '&gt;');
  }
};

/**
 * Sanitizes an email address
 * @param email The email address to sanitize
 * @returns Sanitized email or empty string if invalid
 */
export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  try {
    // Basic email pattern check
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // First sanitize as string
    const sanitized = sanitizeString(email);
    
    // Return empty string if it doesn't match a valid email pattern
    if (!emailPattern.test(sanitized)) {
      logger.warn('Invalid email format detected:', { email: sanitized });
      return '';
    }
    
    return sanitized;
  } catch (error) {
    logger.error('Error sanitizing email input:', error);
    return '';
  }
};

/**
 * Sanitizes a phone number to include only digits and standard phone number characters
 * @param phone The phone number to sanitize
 * @returns Sanitized phone number
 */
export const sanitizePhone = (phone: string): string => {
  if (!phone) return '';
  
  try {
    // Remove all non-digit, non-parenthesis, non-plus, non-dash, non-space characters
    return phone.replace(/[^0-9()+\-\s]/g, '');
  } catch (error) {
    logger.error('Error sanitizing phone input:', error);
    return '';
  }
};

/**
 * Sanitizes an object containing form data
 * @param formData Object containing form data to sanitize
 * @returns Sanitized form data object
 */
export const sanitizeFormData = <T extends Record<string, unknown>>(formData: T): T => {
  const sanitized = { ...formData };
  
  try {
    // Iterate through all properties
    Object.keys(sanitized).forEach(key => {
      const value = sanitized[key];
      
      if (typeof value === 'string') {
        // Handle different types of data based on key name
        if (key.toLowerCase().includes('email')) {
          sanitized[key] = sanitizeEmail(value) as unknown;
        } else if (key.toLowerCase().includes('phone')) {
          sanitized[key] = sanitizePhone(value) as unknown;
        } else {
          sanitized[key] = sanitizeString(value) as unknown;
        }
      } else if (value && typeof value === 'object' && !Array.isArray(value)) {
        // Recursively sanitize nested objects
        sanitized[key] = sanitizeFormData(value as Record<string, unknown>) as unknown;
      } else if (Array.isArray(value)) {
        // Sanitize array items if they are strings
        sanitized[key] = value.map(item => 
          typeof item === 'string' ? sanitizeString(item) : item
        ) as unknown;
      }
    });
    
    return sanitized;
  } catch (error) {
    logger.error('Error sanitizing form data:', error);
    return formData; // Return original on error, assuming validation happens elsewhere
  }
};

/**
 * Validates a form data object against rules and returns validation errors
 * @param formData Object containing form data to validate
 * @param rules Validation rules object
 * @returns Object with validation errors or null if valid
 */
export const validateFormData = <T extends Record<string, unknown>>(
  formData: T,
  rules: Record<string, (value: unknown) => string | null>
): Record<string, string> | null => {
  const errors: Record<string, string> = {};
  
  // Check each field against its rule
  Object.keys(rules).forEach(field => {
    if (field in formData) {
      const error = rules[field](formData[field]);
      if (error) {
        errors[field] = error;
      }
    }
  });
  
  return Object.keys(errors).length > 0 ? errors : null;
}; 