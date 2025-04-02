import { AxiosError } from 'axios';
import { logger } from './logger';

/**
 * API Error types for categorizing errors
 */
export enum ApiErrorType {
  NETWORK = 'network_error',
  TIMEOUT = 'timeout_error',
  NOT_FOUND = 'not_found',
  SERVER = 'server_error',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
  VALIDATION = 'validation_error',
  UNKNOWN = 'unknown_error'
}

/**
 * Standard API error response structure
 */
export interface ApiErrorResponse {
  type: ApiErrorType;
  message: string;
  statusCode?: number;
  validationErrors?: Record<string, string[]>;
  requestId?: string;
  timestamp: string;
}

/**
 * Default error messages for different error types
 */
const DEFAULT_ERROR_MESSAGES: Record<ApiErrorType, string> = {
  [ApiErrorType.NETWORK]: 'Network connectivity issue. Please check your connection.',
  [ApiErrorType.TIMEOUT]: 'Request timed out. Please try again.',
  [ApiErrorType.NOT_FOUND]: 'The requested resource was not found.',
  [ApiErrorType.SERVER]: 'Server error occurred. Our team has been notified.',
  [ApiErrorType.UNAUTHORIZED]: 'Authentication required. Please log in again.',
  [ApiErrorType.FORBIDDEN]: 'You do not have permission to access this resource.',
  [ApiErrorType.VALIDATION]: 'Please check your input and try again.',
  [ApiErrorType.UNKNOWN]: 'An unexpected error occurred. Please try again later.'
};

/**
 * Handles API errors and transforms them into a standardized format
 * @param error The caught error object
 * @param defaultMessage Optional custom default message
 * @returns Standardized API error response
 */
export function handleApiError(
  error: unknown, 
  defaultMessage?: string
): ApiErrorResponse {
  // Default unknown error response
  const defaultResponse: ApiErrorResponse = {
    type: ApiErrorType.UNKNOWN,
    message: defaultMessage || DEFAULT_ERROR_MESSAGES[ApiErrorType.UNKNOWN],
    timestamp: new Date().toISOString()
  };
  
  // Log the error
  logger.error('API error:', error);
  
  // Handle specific error types
  if (error instanceof AxiosError) {
    const { response, request, message } = error;
    
    // Request was made and server responded with error
    if (response) {
      const { status, data } = response;
      
      // Generate requestId for tracking
      const requestId = `req_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 7)}`;
      
      // Handle different status codes
      if (status === 404) {
        return {
          type: ApiErrorType.NOT_FOUND,
          message: data?.message || DEFAULT_ERROR_MESSAGES[ApiErrorType.NOT_FOUND],
          statusCode: status,
          requestId,
          timestamp: new Date().toISOString()
        };
      } else if (status === 401) {
        return {
          type: ApiErrorType.UNAUTHORIZED,
          message: data?.message || DEFAULT_ERROR_MESSAGES[ApiErrorType.UNAUTHORIZED],
          statusCode: status,
          requestId,
          timestamp: new Date().toISOString()
        };
      } else if (status === 403) {
        return {
          type: ApiErrorType.FORBIDDEN,
          message: data?.message || DEFAULT_ERROR_MESSAGES[ApiErrorType.FORBIDDEN],
          statusCode: status,
          requestId,
          timestamp: new Date().toISOString()
        };
      } else if (status === 422 || status === 400) {
        return {
          type: ApiErrorType.VALIDATION,
          message: data?.message || DEFAULT_ERROR_MESSAGES[ApiErrorType.VALIDATION],
          statusCode: status,
          validationErrors: data?.errors || {},
          requestId,
          timestamp: new Date().toISOString()
        };
      } else if (status >= 500) {
        return {
          type: ApiErrorType.SERVER,
          message: data?.message || DEFAULT_ERROR_MESSAGES[ApiErrorType.SERVER],
          statusCode: status,
          requestId,
          timestamp: new Date().toISOString()
        };
      }
    }
    // Request was made but no response received (network error)
    else if (request) {
      if (message.includes('timeout')) {
        return {
          type: ApiErrorType.TIMEOUT,
          message: DEFAULT_ERROR_MESSAGES[ApiErrorType.TIMEOUT],
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          type: ApiErrorType.NETWORK,
          message: DEFAULT_ERROR_MESSAGES[ApiErrorType.NETWORK],
          timestamp: new Date().toISOString()
        };
      }
    }
  }
  
  // If we couldn't determine a more specific error type, return the default
  return defaultResponse;
}

/**
 * Returns a user-friendly message based on the API error
 * This can be used for displaying error messages to users
 * @param error The API error response
 * @returns User-friendly error message
 */
export function getUserFriendlyErrorMessage(error: ApiErrorResponse): string {
  // Return custom message if present, otherwise fallback to default message for the error type
  return error.message || DEFAULT_ERROR_MESSAGES[error.type] || DEFAULT_ERROR_MESSAGES[ApiErrorType.UNKNOWN];
}

/**
 * Hook for handling API errors in React components
 * @param error The API error to handle
 * @param options Customization options
 */
export function useApiErrorHandler(
  error: ApiErrorResponse | null,
  options?: {
    onUnauthorized?: () => void;
    onForbidden?: () => void;
    onNotFound?: () => void;
    onValidation?: (errors: Record<string, string[]>) => void;
  }
) {
  if (!error) return;
  
  // Log the error
  logger.error(`Handling API error: ${error.type}`, null, {
    context: {
      statusCode: error.statusCode,
      requestId: error.requestId,
    }
  });
  
  // Perform additional actions based on error type
  switch (error.type) {
    case ApiErrorType.UNAUTHORIZED:
      options?.onUnauthorized?.();
      break;
    case ApiErrorType.FORBIDDEN:
      options?.onForbidden?.();
      break;
    case ApiErrorType.NOT_FOUND:
      options?.onNotFound?.();
      break;
    case ApiErrorType.VALIDATION:
      if (error.validationErrors) {
        options?.onValidation?.(error.validationErrors);
      }
      break;
  }
} 