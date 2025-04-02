import React from 'react';
import { Helmet } from 'react-helmet';
import PageErrorBoundary from '@/components/PageErrorBoundary';
import ErrorTest, { ErrorType } from '@/components/ErrorTest';
import Layout from '@/components/Layout';

/**
 * ErrorTestPage provides a dedicated page to test error boundary functionality
 * This page allows users to trigger different types of errors to see how error boundaries handle them
 */
const ErrorTestPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Error Testing | Moye Law</title>
        <meta name="description" content="Test page for error handling capabilities" />
      </Helmet>
      
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Error Boundary Testing</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">With Page Error Boundary</h2>
              <p className="text-gray-600 mb-4">
                This component is wrapped with a PageErrorBoundary, which will catch errors and display a user-friendly error page.
              </p>
              <div className="mt-4">
                <PageErrorBoundary pageName="Error Test Component">
                  <ErrorTest errorType={ErrorType.RENDER} />
                </PageErrorBoundary>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Without Error Boundary</h2>
              <p className="text-gray-600 mb-4">
                This component has no local error boundary (only the global one), so errors here will be caught by the app-level error boundary.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-700">
                  <strong>Warning:</strong> Triggering errors here might affect the entire app. The global error boundary will catch them, but the entire app will need to be reset.
                </p>
              </div>
              <div className="mt-4">
                <ErrorTest errorType={ErrorType.EVENT} />
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Error Boundary Documentation</h2>
            <div className="prose max-w-none">
              <p>
                Our application uses a multi-layered error boundary approach:
              </p>
              <ul>
                <li>
                  <strong>Global Error Boundary:</strong> Catches any unhandled errors in the entire application.
                </li>
                <li>
                  <strong>Page Error Boundary:</strong> Protects individual pages, showing a more specific UI when a page fails.
                </li>
                <li>
                  <strong>Component Error Boundary:</strong> Can be applied to critical components that should fail independently.
                </li>
              </ul>
              <p>
                Error boundaries only catch errors in the React component tree. They do not catch errors in:
              </p>
              <ul>
                <li>Event handlers (unless they propagate to rendering)</li>
                <li>Asynchronous code (promises, setTimeout, etc.)</li>
                <li>Server-side rendering</li>
                <li>Errors thrown in the error boundary itself</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ErrorTestPage; 