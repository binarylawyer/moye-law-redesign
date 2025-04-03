/**
 * Centralized color system for consistent styling across the application
 * This ensures consistent color usage and makes it easier to update themes
 */

// Brand colors
export const BRAND_COLORS = {
  // Primary colors
  navy: '#0A2342',
  gold: '#C99D56',
  charcoal: '#2D3142',
  
  // Mondrian-inspired colors (authentic color codes from Mondrian paintings)
  mondrianRed: '#D6001C',
  mondrianBlue: '#003B98',
  mondrianYellow: '#FFD500',
  mondrianBlack: '#000000',
  mondrianWhite: '#FFFFFF',
  
  // Extended Mondrian palette (complementary colors)
  lightBlue: '#4D80D4',
  lightYellow: '#FFEB80',
  green: '#00A650',
  
  // UI colors
  success: '#34D399',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Grayscale
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#6B7280',
  darkGray: '#374151',
  black: '#000000',
  
  // Background colors
  backgroundLight: '#FFFFFF',
  backgroundMuted: '#F5F5F5',
  backgroundDark: '#0A2342',
};

// Color opacity variants
export const withOpacity = (hexColor: string, opacity: number): string => {
  // Ensure opacity is between 0 and 1
  const validOpacity = Math.max(0, Math.min(1, opacity));
  
  // Convert hex to rgba
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${validOpacity})`;
};

// Semantic color mapping
export const SEMANTIC_COLORS = {
  // Text colors
  textPrimary: BRAND_COLORS.charcoal,
  textSecondary: BRAND_COLORS.navy,
  textLight: BRAND_COLORS.white,
  textMuted: BRAND_COLORS.gray,
  textAccent: BRAND_COLORS.gold,
  
  // Button colors
  buttonPrimary: BRAND_COLORS.navy,
  buttonSecondary: BRAND_COLORS.gold,
  buttonAccent: BRAND_COLORS.mondrianRed,
  buttonDisabled: BRAND_COLORS.gray,
  
  // Link colors
  linkDefault: BRAND_COLORS.navy,
  linkHover: BRAND_COLORS.mondrianRed,
  
  // Border colors
  borderLight: withOpacity(BRAND_COLORS.black, 0.1),
  borderMedium: withOpacity(BRAND_COLORS.black, 0.2),
  borderDark: BRAND_COLORS.black,
  
  // State colors
  stateSuccess: BRAND_COLORS.success,
  stateError: BRAND_COLORS.error,
  stateWarning: BRAND_COLORS.warning,
  stateInfo: BRAND_COLORS.info,
};

// Specific UI component color configurations
export const COMPONENT_COLORS = {
  header: {
    background: withOpacity(BRAND_COLORS.white, 0.97),
    text: BRAND_COLORS.navy,
    border: BRAND_COLORS.black,
    hover: BRAND_COLORS.mondrianRed,
  },
  
  navigation: {
    active: BRAND_COLORS.mondrianRed,
    hover: BRAND_COLORS.mondrianRed,
    dropdown: {
      background: BRAND_COLORS.white,
      border: withOpacity(BRAND_COLORS.black, 0.1),
    },
  },
  
  button: {
    primary: {
      background: BRAND_COLORS.navy,
      text: BRAND_COLORS.white,
      hover: withOpacity(BRAND_COLORS.navy, 0.9),
    },
    secondary: {
      background: BRAND_COLORS.gold,
      text: BRAND_COLORS.white,
      hover: withOpacity(BRAND_COLORS.gold, 0.9),
    },
    mondrian: {
      yellow: {
        background: BRAND_COLORS.lightYellow,
        text: BRAND_COLORS.black,
        hover: BRAND_COLORS.mondrianRed,
        hoverText: BRAND_COLORS.white,
      },
      red: {
        background: BRAND_COLORS.mondrianRed,
        text: BRAND_COLORS.white,
        hover: withOpacity(BRAND_COLORS.mondrianRed, 0.9),
      },
      blue: {
        background: BRAND_COLORS.mondrianBlue,
        text: BRAND_COLORS.white,
        hover: withOpacity(BRAND_COLORS.mondrianBlue, 0.9),
      },
    },
  },
  
  sections: {
    primary: {
      background: BRAND_COLORS.white,
      alternate: BRAND_COLORS.lightGray,
    },
  },
  
  forms: {
    input: {
      border: withOpacity(BRAND_COLORS.black, 0.2),
      focusBorder: BRAND_COLORS.navy,
      text: BRAND_COLORS.charcoal,
      error: BRAND_COLORS.error,
    },
  },
}; 