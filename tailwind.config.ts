import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./v-2/**/*.{ts,tsx}", // Added v-2 directory
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
				'serif': [
					"Cormorant Garamond",
					"Georgia",
					"Times New Roman",
					"serif"
				],
				'mono': [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"monospace"
				],
				// Legacy 'display' mapped to new Serif for transition
				'display': [
					"Cormorant Garamond",
					"Georgia",
					"serif"
				],
				'sans': [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif"
				],
			},
			fontSize: {
				'base': '1.125rem',
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
				// === HYBRID-MONDRIAN PALETTE (LEGAL LUXURY) ===
				'mondrian': {
					'navy': '#0A2342',      // Grid lines - The Rule of Law
					'gold': '#C99D56',      // Luxury/Wealth - CTAs
					'grey': '#F3F4F6',      // Technical/Product backgrounds
					'white': '#FFFFFF',     // Canvas - Service
					'red': '#8B0000',       // Venetian Red - Art Law accent
				},
				// Legacy colors
				'primary': '#4682B4',
				'navy': '#0A2342',
				'gold': '#C99D56',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
			},
			borderRadius: {
				'none': '0px',
				DEFAULT: '0px',
				lg: '0px',
				md: '0px',
				sm: '0px'
			},
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
			},
			// KINETIC MOTION UTILITIES (Saul Bass)
			perspective: {
				'1000': '1000px',
				'1200': '1200px',
			},
			rotate: {
				'-110': '-110deg',
			},
			transformOrigin: {
				'left-center': 'left center',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
