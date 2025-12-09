import { SushiTheme } from "./types";

export const StorefrontTheme: SushiTheme = {
    name: 'storefront',
    colors: {
        primary: '#0A2342',    // Deep Navy
        secondary: '#C99D56',  // Warm Gold
        background: '#FFFFFF', // White
        border: '#0A2342',     // Navy Lines
        text: {
            heading: '#0A2342',
            body: '#374151',
            code: '#C99D56'
        }
    },
    fonts: {
        heading: 'font-serif', // Class names mapping to tailwind
        body: 'font-sans',
        mono: 'font-mono'
    },
    borderRadius: '0px',
    borderWidth: '4px',
    shadow: '8px 8px 0px 0px #0A2342' // Brutalist Navy
};

export const FactoryTheme: SushiTheme = {
    name: 'factory',
    colors: {
        primary: '#10B981',    // Matrix Green (or Hacker Red, user said "Neo Brutalist/Hacker") -> Let's go Hacker Green/Red mixed
        secondary: '#EF4444',  // Error Red
        background: '#111827', // Dark Grey/Black
        border: '#374151',     // Grey Lines
        text: {
            heading: '#FFFFFF',
            body: '#D1D5DB',
            code: '#10B981'
        }
    },
    fonts: {
        heading: 'font-mono',
        body: 'font-mono',
        mono: 'font-mono'
    },
    borderRadius: '0px',
    borderWidth: '2px',
    shadow: '4px 4px 0px 0px #10B981' // Hacker Green Shadow
};
