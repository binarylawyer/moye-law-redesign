import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/utils/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

/**
 * Enhanced Error Boundary that provides better error handling and recovery options
 * Captures errors in React component tree and displays a fallback UI
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to our logging service
    logger.error('Uncaught error in component:', error, errorInfo);
    
    // Call onError callback if provided
    this.props.onError?.(error, errorInfo);
    
    // Update state with errorInfo for more detailed debugging
    this.setState({ errorInfo });
  }

  // Reset error state to recover
  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  // Refresh the page as an alternative recovery method
  private handleRefresh = () => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-red-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h1>
              <p className="text-gray-600 mb-4">
                We encountered an error while rendering this page.
              </p>
              
              {/* Show error message in development only */}
              {import.meta.env.MODE !== 'production' && this.state.error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-left">
                  <p className="text-sm font-medium text-red-800">{this.state.error.name}: {this.state.error.message}</p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs font-medium text-red-600 cursor-pointer">View component stack</summary>
                      <pre className="mt-2 text-xs text-red-700 overflow-auto p-2 bg-red-50 rounded">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}
              
              <div className="flex gap-4 justify-center">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                  onClick={this.handleReset}
                >
                  Try again
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={this.handleRefresh}
                >
                  Refresh page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // When there's no error, render children normally
    return this.props.children;
  }
}

// Add default export while keeping named export
export default ErrorBoundary;
