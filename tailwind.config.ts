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
				'serif': ['var(--font-serif)'],
				'sans': ['var(--font-sans)'],
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
				'primary': '#4682B4', // Cerulean blue
				'primary-light': '#B0C4DE', // Lighter cerulean (Light Steel Blue)
				'primary-muted': '#7BA7CC', // Muted cerulean
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
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-slow": "fade-in-slow 0.8s ease-out forwards",
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
