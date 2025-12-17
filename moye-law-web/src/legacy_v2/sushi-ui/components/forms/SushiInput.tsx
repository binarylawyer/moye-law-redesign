import React from 'react';
import { SushiTheme } from '../../theme/types';

interface SushiInputProps extends React.ComponentProps<'input'> {
    theme: SushiTheme;
    label: string;
    error?: string;
}

const SushiInput: React.FC<SushiInputProps> = ({
    theme,
    label,
    error,
    className = '',
    ...props
}) => {
    const isFactory = theme.name === 'factory';

    return (
        <div className="w-full space-y-2">
            {/* LABEL */}
            <label
                className="block text-sm font-medium"
                style={{
                    color: theme.colors.text.heading,
                    fontFamily: theme.fonts.heading // Serif/Mono
                }}
            >
                {isFactory ? `> ${label}` : label}
            </label>

            {/* INPUT CONTAINER */}
            <div className="relative">
                <input
                    className={`w-full p-3 focus:outline-none transition-all duration-200 ${className}`}
                    style={{
                        backgroundColor: isFactory ? '#000000' : '#FFFFFF',
                        border: isFactory
                            ? `${theme.borderWidth} solid ${theme.colors.primary}` // Green Box
                            : `1px solid ${theme.colors.border}`, // Standard Border (maybe bottom only in future)
                        color: theme.colors.text.body,
                        fontFamily: theme.fonts.body,
                        borderRadius: theme.borderRadius,
                    }}
                    {...props}
                />

                {/* Factory Cursor Decoration */}
                {isFactory && (
                    <div className="absolute right-3 top-3 animate-pulse w-2 h-4 bg-green-500 pointer-events-none opacity-50"></div>
                )}
            </div>

            {/* ERROR MESSAGE */}
            {error && (
                <p className="text-sm text-red-500 font-mono">
                    {isFactory ? `[ERROR]: ${error}` : error}
                </p>
            )}
        </div>
    );
};

export default SushiInput;
