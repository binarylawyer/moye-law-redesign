import React from 'react';

/**
 * CriticalAppShell Component
 * 
 * This is a minimal version of the app that displays only critical UI elements
 * to ensure fast First Contentful Paint and Largest Contentful Paint.
 * 
 * It contains just enough UI to make the page usable immediately:
 * - Header with logo
 * - Basic page layout
 * - Minimal styling
 */
const CriticalAppShell: React.FC = () => {
  return (
    <div className="app-shell">
      {/* Critical Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '80px',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          {/* Logo - Critical LCP element */}
          <a 
            href="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img 
              src="/logos/moye-logo.webp" 
              alt="MOYE LAW" 
              height={48}
              style={{
                height: '48px',
                width: 'auto',
              }}
              fetchPriority="high"
            />
          </a>
          
          {/* Simplified Nav Placeholder */}
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
            <div style={{ width: '80px', height: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}></div>
            <div style={{ width: '80px', height: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}></div>
            <div style={{ width: '80px', height: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}></div>
          </div>
        </div>
      </header>
      
      {/* Main Content Placeholder */}
      <main style={{
        paddingTop: '80px',
        minHeight: 'calc(100vh - 80px)',
      }}>
        <div style={{
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: '#fafafa',
        }}>
          {/* Hero Section Placeholder */}
          <div style={{
            height: '500px',
            backgroundColor: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className="reveal-on-load" style={{
              maxWidth: '800px',
              padding: '0 1rem',
              color: 'white',
              visibility: 'hidden', // Will be revealed when JS loads
              opacity: 0,
              transition: 'opacity 0.5s',
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}>
                Family Values, <br />
                <span style={{ color: 'gold' }}>Future-Forward</span> Legal Solutions
              </h1>
              <p style={{
                fontSize: '20px',
                marginBottom: '32px',
              }}>
                Sophisticated legal strategies with personal attention, 
                powered by innovative technology.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CriticalAppShell; 