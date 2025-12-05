/**
 * HYBRID-MONDRIAN DESIGN TOKENS
 * "The Art of Engineering" - Moye Law Design System
 * 
 * These tokens enforce the Mondrian grid philosophy:
 * - The Grid is Justice (4px Navy lines)
    artist: {
        family: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
        usage: 'Main headlines, "Art Law" sections, emotional copy',
        vibe: 'Traditional, expensive, trustworthy'
    },

    // The Engineer (UI/Data, Technical Content)
    engineer: {
        family: "'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace",
        usage: 'Navigation items, buttons, "Product" specs, pricing',
        vibe: 'Technical, precise, "Sushi Stack" code aesthetic'
    },

    // The Bridge (Body Text for Readability)
    bridge: {
        family: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        usage: 'Long-form reading for accessibility'
    }
};

// === SPACING SYSTEM ===
// Following the "Intentional Grid" Philosophy
export const spacing = {
    unit: '4px',           // Base unit - aligns with border width
    xs: '8px',             // 2 units
    sm: '16px',            // 4 units
    md: '32px',            // 8 units
    lg: '64px',            // 16 units
    xl: '96px',            // 24 units
    '2xl': '128px',        // 32 units
};

// === GRID RULES ===
export const grid = {
    lineWeight: '4px',                    // Structural weight
    internalDivider: '1px',              // Internal component dividers only
    cornerRadius: '0px',                 // ABSOLUTELY NO ROUNDED CORNERS

    // Golden Ratio for asymmetric layouts
    goldenRatio: 1.618,

    // Standard splits
    contentSidebar: {
        content: '62%',    // Main content area
        sidebar: '38%',    // Context/sticky sidebar
    }
};

// === ANIMATION PRINCIPLES ===
// "Mechanical Feel" - No fades, only snaps and slides
export const motion = {
    // NO FADES - things snap, slide, or draw
    snap: 'duration-75',           // Instant color swaps (buttons)
    slide: 'duration-300',         // Panel reveals
    draw: 'duration-800',          // Grid line animations

    easing: {
        instant: 'ease-out',
        mechanical: 'cubic-bezier(0.16, 1, 0.3, 1)',
    }
};

// === COMPONENT PATTERNS ===
// Reusable class combinations
export const patterns = {
    // Mondrian Grid Border
    gridBorder: \`border-4 border-[${colors.grid.primary}]\`,
  
  // Brutalist Card Shadow (8px offset)
  brutalistShadow: \`shadow-[8px_8px_0px_0px_${colors.blocks.structure}]\`,
  
  // Split-Cell Container
  splitCell: {
    container: \`border-4 border-[${colors.grid.primary}]\`,
    divider: \`border-r-4 border-[${colors.grid.primary}]\`,
    
    // Left: Product/Factory
    product: {
      bg: \`bg-[${colors.blocks.logic}]\`,
      font: typography.engineer.family,
      style: 'Technical, efficient, fixed-price'
    },
    
    // Right: Service/Counsel
    service: {
      bg: \`bg-[${colors.blocks.void}]\`,
      font: typography.artist.family,
      style: 'Empathetic, thorough, bespoke'
    }
  },
  
  // Button Styles
  buttons: {
    // Primary (Engineering/Execute)
    primary: \`bg-[${colors.blocks.structure}] text-[${colors.blocks.luxury}] 
             hover:bg-[${colors.blocks.luxury}] hover:text-[${colors.blocks.structure}]
             ${motion.snap} font-mono border-4 border-[${colors.grid.primary}]\`,
    
    // Secondary (Counsel/Consult)
    secondary: \`bg-white border-4 border-[${colors.grid.primary}] text-[${colors.grid.primary}]
               hover:bg-[${colors.grid.primary}] hover:text-white
               ${motion.snap} font-serif italic\`,
  }
};

// === RESPONSIVE BREAKPOINTS ===
// "The Stack" - How the grid collapses on mobile
export const breakpoints = {
  mobile: '768px',       // Below this: Stack vertically
  tablet: '1024px',
  desktop: '1280px',
  wide: '1536px',
};

// Export all as default
export default {
  colors,
  typography,
  spacing,
  grid,
  motion,
  patterns,
  breakpoints,
};
