import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { logger } from '@/utils/logger';

const TestComponent: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const location = useLocation();
  
  // Log route information
  logger.debug(`TestComponent rendered with:
    - Path: ${location.pathname}
    - Area param: ${area}
  `);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        <div className="container mx-auto px-8 py-24">
          <h1 className="text-3xl font-bold mb-6">Practice Area Route Test</h1>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Route Information:</h2>
            <p><strong>Current Path:</strong> {location.pathname}</p>
            <p><strong>Area Parameter:</strong> {area || "(none)"}</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">All Practice Areas - Direct Components</h2>
            <p className="mb-4 text-green-600">All practice area pages now use direct component implementations for consistent rendering.</p>
            <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'ip-licensing',
                'software-licensing',
                'elder-law',
                'entertainment-law',
                'digital-asset-protection',
                'ip-consulting',
                'emerging-tech',
              ].map(serviceId => (
                <li key={serviceId} className="mb-2">
                  <a 
                    href={`/practice/${serviceId}`}
                    className="text-blue-600 hover:underline"
                  >
                    {serviceId}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Why Direct Components?</h2>
            <p>We're using direct component implementations because they:</p>
            <ul className="list-disc pl-6 mt-2">
              <li className="mb-2">Eliminate data lookup issues by hardcoding the needed content</li>
              <li className="mb-2">Provide consistent rendering across all practice area pages</li>
              <li className="mb-2">Remove dependencies on external data sources that might fail</li>
              <li className="mb-2">Simplify the component structure for better reliability</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestComponent; 