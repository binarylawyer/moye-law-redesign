import React from 'react';
import { SushiTheme } from '../../theme/types';
import { Loader2 } from 'lucide-react';

interface SushiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme: SushiTheme;
    variant?: 'primary' | 'secondary' | 'outline';
    isLoading?: boolean;
}

const SushiButton: React.FC<SushiButtonProps> = ({
    theme,
    variant = 'primary',
    isLoading,
    children,
    className = '',
    ...props
}) => {

    // Base Styles
    const baseStyles = {
        fontFamily: theme.fonts.heading, // Serif for Store, Mono for Factory
        borderRadius: theme.borderRadius,
        boxShadow: theme.shadow === 'none' ? 'none' : 'none', // Buttons usually shouldn't have the huge card shadow unless specified
        transition: 'all 0.2s ease',
    };

    // Theme-Logic extraction
    const isFactory = theme.name === 'factory';

    // Dynamic Styles based on Variant & Theme
    let variantStyles = {};

    if (variant === 'primary') {
        variantStyles = {
            backgroundColor: theme.colors.primary,
            color: isFactory ? '#000000' : '#FFFFFF', // Factory Green typically has black text, or White on Navy
            border: `${theme.borderWidth} solid ${theme.colors.primary}`,
            textTransform: isFactory ? 'uppercase' : 'none',
            letterSpacing: isFactory ? '0.1em' : 'normal',
        };
        // Factory special override: Matrix style (Black bg, Green text, Green Border)
        if (isFactory) {
            variantStyles = {
                backgroundColor: 'transparent',
                color: theme.colors.primary,
                border: `${theme.borderWidth} solid ${theme.colors.primary}`,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
            }
        }
    } else if (variant === 'outline') {
        variantStyles = {
            backgroundColor: 'transparent',
            color: theme.colors.primary,
            border: `${theme.borderWidth} solid ${theme.colors.primary}`,
        }
    }

    // Hover styles would genuinely require CSS-in-JS or Tailwind classes constructed dynamically. 
    // For now, we rely on standard tailwind utility injection for hover if needed, 
    // or we accept that this "Prototype" uses inline styles for the core tokens.

    // We'll add a standard Tailwind class for hover that matches the theme approximately
    const hoverClass = isFactory
        ? "hover:bg-green-900/20"
        : "hover:translate-y-[-2px] hover:shadow-lg";

    return (
        <button
            className={`px-6 py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${hoverClass} ${className}`}
            style={{ ...baseStyles, ...variantStyles }}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}

            {/* Factory Decoration: [ TEXT ] */}
            {isFactory && !isLoading ? `[ ${children} ]` : children}
        </button>
    );
};

export default SushiButton;
