/**
 * Logger utility that provides environment-aware logging
 * In production, it can be configured to send logs to a service
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogOptions {
  context?: Record<string, unknown>;
  tags?: string[];
}

// Default log options when none provided
const defaultOptions: LogOptions = {
  context: {},
  tags: []
};

// Determine if we're in production
const isProduction = import.meta.env.MODE === 'production';

const logger = {
  /**
   * Debug level logging - only outputs in development
   */
  debug: (message: string, options?: LogOptions) => {
    if (!isProduction) {
      console.debug(
        '%c[DEBUG]%c ' + message,
        'color: #9CA3AF; font-weight: bold',
        'color: inherit',
        ...(options ? [options.context] : [])
      );
    }

    // In production, we could send debug logs to a monitoring service
  },

  /**
   * Info level logging
   */
  info: (message: string, options?: LogOptions) => {
    const opts = { ...defaultOptions, ...options };
    
    // Always log to console in development
    if (!isProduction) {
      console.info(
        '%c[INFO]%c ' + message,
        'color: #3B82F6; font-weight: bold', 
        'color: inherit',
        opts.context
      );
    }

    // In production, we could send info logs to a monitoring service
  },

  /**
   * Warning level logging
   */
  warn: (message: string, options?: LogOptions) => {
    const opts = { ...defaultOptions, ...options };
    
    console.warn(
      '[WARN] ' + message,
      opts.context
    );

    // In production, we could send warning logs to a monitoring service
  },

  /**
   * Error level logging
   */
  error: (message: string, error?: Error | unknown, options?: LogOptions) => {
    const opts = { ...defaultOptions, ...options };
    
    console.error(
      '[ERROR] ' + message,
      error,
      opts.context
    );

    // In production, we could send error logs to a monitoring service
    // Example: if (isProduction) { sendToErrorService(message, error, opts); }
  }
};

/**
 * Function to send logs to an external service in production
 * This is a placeholder for actual implementation
 */
const sendToErrorService = (
  level: LogLevel,
  message: string,
  error?: Error | unknown,
  options?: LogOptions
) => {
  // Implementation for sending logs to a service like Sentry, LogRocket, etc.
  // This would be implemented when setting up error monitoring
};

export { logger }; 