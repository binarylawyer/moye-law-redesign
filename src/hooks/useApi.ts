import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { 
  handleApiError, 
  ApiErrorResponse, 
  getUserFriendlyErrorMessage 
} from '@/utils/apiErrorHandler';
import { logger } from '@/utils/logger';
import { useToast } from '@/components/ui/use-toast';

/**
 * Hook result interface
 */
interface UseApiResult<T> {
  // Data returned from the API
  data: T | null;
  // Loading state
  isLoading: boolean;
  // Error state
  error: ApiErrorResponse | null;
  // Function to execute the API call
  execute: (params?: any) => Promise<T | null>;
  // Reset the state
  reset: () => void;
  // User-friendly error message
  errorMessage: string | null;
  // Success state
  isSuccess: boolean;
}

/**
 * Hook options interface
 */
interface UseApiOptions<T> {
  // Execute the API call immediately
  immediate?: boolean;
  // Initial parameters
  initialParams?: any;
  // Show toast notifications on error
  showErrorToast?: boolean;
  // Show toast notifications on success
  showSuccessToast?: boolean;
  // Success toast message
  successMessage?: string;
  // Transform the response data
  transformResponse?: (data: any) => T;
  // Additional logic on success
  onSuccess?: (data: T) => void;
  // Additional logic on error
  onError?: (error: ApiErrorResponse) => void;
  // Skip the API call under certain conditions
  skip?: boolean;
}

/**
 * Custom hook for making API calls with integrated error handling
 * @param url The API endpoint URL
 * @param method The HTTP method to use
 * @param config Additional axios configuration
 * @param options Hook options
 * @returns Hook result object
 */
function useApi<T = any>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
  config: AxiosRequestConfig = {},
  options: UseApiOptions<T> = {}
): UseApiResult<T> {
  // Destructure options with defaults
  const { 
    immediate = false, 
    initialParams = null,
    showErrorToast = true,
    showSuccessToast = false,
    successMessage = 'Operation completed successfully',
    transformResponse,
    onSuccess,
    onError,
    skip = false
  } = options;

  // State hooks
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiErrorResponse | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  // Error message derived from error state
  const errorMessage = error ? getUserFriendlyErrorMessage(error) : null;
  
  // Execute API call
  const execute = useCallback(async (params: any = null): Promise<T | null> => {
    if (skip) {
      logger.debug(`Skipping API call to ${url}`);
      return null;
    }
    
    // Reset states
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    
    try {
      let response: AxiosResponse;
      const mergedConfig = { ...config };
      
      // Log the API call
      logger.debug(`Making ${method} request to ${url}`, { 
        context: { params }
      });
      
      // Execute appropriate method based on HTTP verb
      switch (method) {
        case 'GET':
          mergedConfig.params = params;
          response = await axios.get(url, mergedConfig);
          break;
        case 'POST':
          response = await axios.post(url, params, mergedConfig);
          break;
        case 'PUT':
          response = await axios.put(url, params, mergedConfig);
          break;
        case 'PATCH':
          response = await axios.patch(url, params, mergedConfig);
          break;
        case 'DELETE':
          mergedConfig.params = params;
          response = await axios.delete(url, mergedConfig);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
      
      // Process successful response
      const responseData = transformResponse 
        ? transformResponse(response.data) 
        : response.data;
      
      setData(responseData);
      setIsSuccess(true);
      
      // Show success toast if enabled
      if (showSuccessToast) {
        toast({
          title: "Success",
          description: successMessage,
          variant: "default",
        });
      }
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(responseData);
      }
      
      return responseData;
    } catch (err) {
      // Process error response using our error handler
      const apiError = handleApiError(err);
      setError(apiError);
      
      // Show error toast if enabled
      if (showErrorToast) {
        toast({
          title: "Error",
          description: getUserFriendlyErrorMessage(apiError),
          variant: "destructive",
        });
      }
      
      // Call error callback if provided
      if (onError) {
        onError(apiError);
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [url, method, config, skip, transformResponse, showErrorToast, showSuccessToast, successMessage, onSuccess, onError, toast]);

  // Reset function
  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsSuccess(false);
  }, []);

  // Execute on mount if immediate is true
  useEffect(() => {
    if (immediate && !skip) {
      execute(initialParams);
    }
  }, [execute, immediate, initialParams, skip]);

  return {
    data,
    isLoading,
    error,
    execute,
    reset,
    errorMessage,
    isSuccess
  };
}

export default useApi; 