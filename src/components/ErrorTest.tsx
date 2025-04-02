import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

/**
 * ErrorType enum defines the types of errors that can be simulated
 */
enum ErrorType {
  RENDER = 'render',
  EFFECT = 'effect',
  EVENT = 'event',
  ASYNC = 'async',
  CUSTOM = 'custom'
}

interface ErrorTestProps {
  /**
   * The type of error to simulate
   * @default ErrorType.RENDER
   */
  errorType?: ErrorType;
  
  /**
   * Custom error message to throw
   * @default "Simulated error for testing"
   */
  errorMessage?: string;
  
  /**
   * Delay before throwing error (in milliseconds)
   * @default 0
   */
  errorDelay?: number;
}

/**
 * Component that deliberately throws errors for testing error boundaries
 * This is useful for demonstrating and testing error handling in the application
 */
const ErrorTest: React.FC<ErrorTestProps> = ({
  errorType = ErrorType.RENDER,
  errorMessage = "Simulated error for testing",
  errorDelay = 0
}) => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [errorDetails, setErrorDetails] = useState<{
    type: ErrorType;
    message: string;
  }>({
    type: errorType,
    message: errorMessage
  });
  
  // Function to throw an error
  const throwError = () => {
    throw new Error(`${errorDetails.message} (${errorDetails.type} error)`);
  };
  
  // For testing effect errors
  useEffect(() => {
    if (shouldThrow && errorDetails.type === ErrorType.EFFECT) {
      if (errorDelay > 0) {
        const timeoutId = setTimeout(throwError, errorDelay);
        return () => clearTimeout(timeoutId);
      } else {
        throwError();
      }
    }
  }, [shouldThrow, errorDetails, errorDelay]);
  
  // For testing async errors
  const handleAsyncError = async () => {
    try {
      await new Promise<void>((_, reject) => {
        setTimeout(() => reject(new Error(`${errorDetails.message} (${errorDetails.type} error)`)), 
          errorDelay > 0 ? errorDelay : 100);
      });
    } catch (error) {
      setShouldThrow(true);
      throw error;
    }
  };
  
  // For testing event handler errors
  const handleEventError = () => {
    setShouldThrow(true);
    throwError();
  };
  
  // Trigger error based on type
  if (shouldThrow) {
    if (errorDetails.type === ErrorType.RENDER) {
      throwError();
    }
  }
  
  // Controls for error settings
  const renderControls = () => (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">Error Testing Panel</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Error Type
          </label>
          <select 
            className="w-full p-2 border rounded"
            value={errorDetails.type}
            onChange={(e) => setErrorDetails({
              ...errorDetails,
              type: e.target.value as ErrorType
            })}
          >
            {Object.values(ErrorType).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Error
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Error Message
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={errorDetails.message}
            onChange={(e) => setErrorDetails({
              ...errorDetails,
              message: e.target.value
            })}
          />
        </div>
        
        <div className="pt-4 flex gap-4">
          {errorDetails.type === ErrorType.EVENT && (
            <Button
              onClick={handleEventError}
              variant="destructive"
            >
              Trigger Event Error
            </Button>
          )}
          
          {errorDetails.type === ErrorType.ASYNC && (
            <Button
              onClick={handleAsyncError}
              variant="destructive"
            >
              Trigger Async Error
            </Button>
          )}
          
          {(errorDetails.type === ErrorType.RENDER || 
            errorDetails.type === ErrorType.EFFECT || 
            errorDetails.type === ErrorType.CUSTOM) && (
            <Button
              onClick={() => setShouldThrow(true)}
              variant="destructive"
            >
              Trigger Error
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  
  return renderControls();
};

export default ErrorTest;
export { ErrorType }; 