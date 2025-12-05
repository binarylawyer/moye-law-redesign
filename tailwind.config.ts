import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				// THE BINARY LAWYER: Dual Typography System
				// The Artist/Lawyer - Elegant, traditional, emotional
				'serif': [
					"Cormorant Garamond",
					"Georgia",
					"Times New Roman",
					"serif"
				],
				// The Engineer/Coder - Technical, precise, systematic
				'mono': [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"monospace"
				],
				// Montserrat for modern headlines
				'display': [
					"Montserrat",
					"ui-sans-serif",
					"system-ui", 
					"-apple-system", 
					"BlinkMacSystemFont", 
					"Segoe UI", 
					"Roboto", 
					"Helvetica Neue", 
					"Arial", 
					"sans-serif"
				],
				// Inter for body text (readability bridge)
				'sans': [
					"Inter",
					"ui-sans-serif",
					"system-ui", 
					"-apple-system", 
					"BlinkMacSystemFont", 
					"Segoe UI", 
					"Roboto", 
					"Helvetica Neue", 
					"Arial", 
					"sans-serif"
				],
			},
			fontSize: {
                'base': '1.125rem',    // Increased base font size
                'lg': '1.25rem',
                'xl': '1.375rem',
                '2xl': '1.5rem',
                '3xl': '1.75rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
            },
			colors: {
				// === HYBRID-MONDRIAN PALETTE ===
				// Deep Navy replaces Mondrian's black as the grid structure
				'mondrian': {
					'navy': '#0A2342',      // Grid lines - The Rule of Law
					'gold': '#C99D56',      // Luxury/Wealth - CTAs and highlights
					'red': '#8B0000',       // Venetian Red - Art Law accent (sparse)
					'white': '#FFFFFF',     // Canvas - The Void
					'grey': '#F3F4F6',      // Technical/Product backgrounds
				},
				
				// Legacy colors (backward compatibility)
				'primary': '#4682B4', // Cerulean blue
				'primary-light': '#B0C4DE',
				'primary-muted': '#7BA7CC',
				'navy': '#0A2342',
				'gold': '#C99D56',
				'light-gray': '#F5F5F5',
				'charcoal': '#2D3142',
				'pastel-blue': '#D3E4FD',
				'ocean-blue': '#0EA5E9',
				'sky-blue': '#1EAEDB',
				'bright-blue': '#0FA0CE',
				'soft-gold': '#F2E3C9',
				'pastel-green': '#F2FCE2',
				'pastel-beige': '#FDE1D3',
				'pastel-cream': '#FEF7CD',
				'muted-navy': '#303E53',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			spacing: {
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'40': '40px',
				'48': '48px',
				'56': '56px',
				'64': '64px',
				'72': '72px',
				'80': '80px',
				'96': '96px',
				'120': '120px',
			},
			borderRadius: {
				// MONDRIAN GRID: NO ROUNDED CORNERS
				// Pure rectangles only
				'none': '0px',
				DEFAULT: '0px',
				lg: '0px',
				md: '0px',
				sm: '0px'
			},
			// Mondrian 4px grid standard
			borderWidth: {
				DEFAULT: '1px',
				'0': '0px',
				'2': '2px',
				'4': '4px',  // The Mondrian Standard
				'8': '8px',
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				"fade-in": {
					"0%": { opacity: '0', transform: 'translateY(10px)' },
					"100%": { opacity: '1', transform: 'translateY(0)' }
				},
				"fade-in-slow": {
					"0%": { opacity: '0' },
					"100%": { opacity: '1' }
				},
				"slide-in": {
					"0%": { transform: 'translateX(-20px)', opacity: '0' },
					"100%": { transform: 'translateX(0)', opacity: '1' }
				},
				"scale-in": {
					"0%": { transform: 'scale(0.9)', opacity: '0' },
					"100%": { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-slow": "fade-in-slow 0.8s ease-out forwards",
				"slide-in": "slide-in 0.5s ease-out forwards",
				"scale-in": "scale-in 0.4s ease-out forwards"
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
