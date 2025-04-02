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

// Optional flag to enable console logging in production (off by default)
let enableConsoleInProduction = false;

// Configuration options
interface LoggerConfig {
  enableConsoleInProduction?: boolean;
  logLevels?: Record<LogLevel, boolean>;
  serviceConfig?: Record<string, unknown>;
}

// Define which log levels are allowed in production console
const defaultProductionLevels: Record<LogLevel, boolean> = {
  debug: false,  // No debug logs in production console
  info: false,   // No info logs in production console
  warn: true,    // Show warnings in production console
  error: true    // Show errors in production console
};

// Current log level configuration
let enabledLogLevels = { ...defaultProductionLevels };

/**
 * Sanitizes log data to remove sensitive information
 */
const sanitizeLogData = (data: unknown): unknown => {
  // If not an object or null, return as is
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  
  // Handle arrays
  if (Array.isArray(data)) {
    return data.map(item => sanitizeLogData(item));
  }
  
  // Create a copy to avoid modifying the original
  const sanitized = { ...data };
  
  // List of potentially sensitive fields to mask
  const sensitiveFields = [
    'password', 'token', 'secret', 'key', 'auth', 'credential', 'ssn', 
    'creditCard', 'credit', 'card', 'social', 'security', 'authorization'
  ];
  
  // Check each property
  Object.keys(sanitized).forEach(key => {
    const lowerKey = key.toLowerCase();
    
    // Check if the key contains any sensitive terms
    const isSensitive = sensitiveFields.some(field => 
      lowerKey.includes(field.toLowerCase())
    );
    
    if (isSensitive) {
      // Mask sensitive data
      sanitized[key] = '[REDACTED]';
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      // Recursively sanitize nested objects
      sanitized[key] = sanitizeLogData(sanitized[key]);
    }
  });
  
  return sanitized;
};

const logger = {
  /**
   * Configure logger behavior
   */
  configure: (config: LoggerConfig): void => {
    if (config.enableConsoleInProduction !== undefined) {
      enableConsoleInProduction = config.enableConsoleInProduction;
    }
    
    if (config.logLevels) {
      enabledLogLevels = { ...defaultProductionLevels, ...config.logLevels };
    }
    
    // Store service configuration for external logging
    if (config.serviceConfig) {
      // In a real implementation, this would initialize the external service
    }
  },
  
  /**
   * Debug level logging - only outputs in development by default
   */
  debug: (message: string, options?: LogOptions): void => {
    const opts = { ...defaultOptions, ...options };
    const shouldLog = !isProduction || (isProduction && enableConsoleInProduction && enabledLogLevels.debug);
    
    if (shouldLog) {
      console.debug(
        '%c[DEBUG]%c ' + message,
        'color: #9CA3AF; font-weight: bold',
        'color: inherit',
        ...(opts ? [sanitizeLogData(opts.context)] : [])
      );
    }

    // In production, send to monitoring service if needed
    if (isProduction && enabledLogLevels.debug) {
      sendToLogService('debug', message, null, opts);
    }
  },

  /**
   * Info level logging
   */
  info: (message: string, options?: LogOptions): void => {
    const opts = { ...defaultOptions, ...options };
    const shouldLog = !isProduction || (isProduction && enableConsoleInProduction && enabledLogLevels.info);
    
    if (shouldLog) {
      console.info(
        '%c[INFO]%c ' + message,
        'color: #3B82F6; font-weight: bold', 
        'color: inherit',
        sanitizeLogData(opts.context)
      );
    }

    // In production, send to monitoring service
    if (isProduction && enabledLogLevels.info) {
      sendToLogService('info', message, null, opts);
    }
  },

  /**
   * Warning level logging
   */
  warn: (message: string, options?: LogOptions): void => {
    const opts = { ...defaultOptions, ...options };
    const shouldLog = !isProduction || (isProduction && enableConsoleInProduction && enabledLogLevels.warn);
    
    if (shouldLog) {
      console.warn(
        '[WARN] ' + message,
        sanitizeLogData(opts.context)
      );
    }

    // In production, send to monitoring service
    if (isProduction && enabledLogLevels.warn) {
      sendToLogService('warn', message, null, opts);
    }
  },

  /**
   * Error level logging
   */
  error: (message: string, error?: Error | unknown, options?: LogOptions): void => {
    const opts = { ...defaultOptions, ...options };
    const shouldLog = !isProduction || (isProduction && enableConsoleInProduction && enabledLogLevels.error);
    
    if (shouldLog) {
      console.error(
        '[ERROR] ' + message,
        error,
        sanitizeLogData(opts.context)
      );
    }

    // In production, always send errors to monitoring service
    if (isProduction && enabledLogLevels.error) {
      sendToLogService('error', message, error, opts);
    }
  }
};

/**
 * Function to send logs to an external service in production
 * This is a placeholder for actual implementation
 */
const sendToLogService = (
  level: LogLevel,
  message: string,
  error?: Error | unknown,
  options?: LogOptions
): void => {
  // Implementation for sending logs to a service like Sentry, LogRocket, etc.
  // This would be implemented when setting up error monitoring
  
  // Example implementation (commented out):
  /*
  if (typeof window !== 'undefined' && window.Sentry) {
    // For Sentry integration
    const eventId = window.Sentry.captureMessage(message, {
      level,
      tags: options?.tags,
      extra: {
        ...sanitizeLogData(options?.context),
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : error
      }
    });
    
    console.debug(`[Logger] Sent to monitoring service with ID: ${eventId}`);
  }
  */
};

// Initialize logger with default configuration
logger.configure({
  enableConsoleInProduction: false,
  logLevels: defaultProductionLevels
});

export { logger }; 