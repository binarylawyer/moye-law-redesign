import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SushiTheme } from '../theme/types';

interface SushiCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    theme: SushiTheme;
    metadata?: string;
}

const SushiCard: React.FC<SushiCardProps> = ({
    title,
    description,
    icon,
    theme,
    metadata = "MODULE_TYPE: SERVICE"
}) => {
    return (
        <div
            className="group relative block h-full transition-all duration-200"
            style={{
                backgroundColor: theme.colors.background,
                border: `${theme.borderWidth} solid ${theme.colors.border}`,
                boxShadow: theme.shadow,
                borderRadius: theme.borderRadius
            }}
        >
            <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div
                        className="p-3 border-2"
                        style={{
                            borderColor: theme.colors.border,
                            color: theme.colors.primary
                        }}
                    >
                        {icon}
                    </div>
                    <ArrowUpRight
                        className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ color: theme.colors.primary }}
                    />
                </div>

                {/* Content */}
                <h3
                    className={`${theme.fonts.heading} text-2xl font-bold mb-3`}
                    style={{ color: theme.colors.text.heading }}
                >
                    {title}
                </h3>

                <p
                    className={`${theme.fonts.body} leading-relaxed flex-grow`}
                    style={{ color: theme.colors.text.body }}
                >
                    {description}
                </p>

                {/* Footer */}
                <div
                    className="mt-6 pt-4 border-t-2"
                    style={{ borderColor: theme.colors.border }}
                >
                    <span
                        className={`${theme.fonts.mono} text-xs uppercase tracking-wider`}
                        style={{ color: theme.colors.text.code }}
                    >
                        {metadata}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SushiCard;
