import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { logger } from '@/utils/logger';
import { Button } from './ui/button';

interface PageErrorBoundaryProps {
  children: React.ReactNode;
  pageName?: string;
}

/**
 * A specialized ErrorBoundary component for wrapping page components
 * Provides a user-friendly error UI with navigation options for recovery
 */
const PageErrorBoundary: React.FC<PageErrorBoundaryProps> = ({ 
  children, 
  pageName = 'this page'
}) => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    logger.error(`Error in ${pageName}:`, error, {
      context: { 
        page: pageName,
        componentStack: errorInfo.componentStack 
      }
    });
  };
  
  // Custom fallback UI for page-level errors
  const PageErrorFallback = () => {
    const navigate = useNavigate();
    
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 pt-8 pb-6 border-b border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-red-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
              We encountered a problem
            </h1>
            <p className="text-gray-600 text-center">
              We're sorry, but we're having trouble loading {pageName}. Our team has been notified of this issue.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-700 mb-4">What would you like to do?</h3>
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="w-full justify-start bg-white hover:bg-gray-50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
                Try reloading the page
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="w-full justify-start bg-white hover:bg-gray-50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
                Return to the homepage
              </Button>
              
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                className="w-full justify-start bg-white hover:bg-gray-50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                Contact support
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <ErrorBoundary 
      onError={handleError}
      fallback={<PageErrorFallback />}
    >
      {children}
    </ErrorBoundary>
  );
};

export default PageErrorBoundary; 