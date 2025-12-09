import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { SushiTheme } from '../theme/types';

interface SushiSplitCardProps {
    theme: SushiTheme;
    title: string;
    topContent: {
        title: string;
        description: string;
        icon?: React.ReactNode;
    };
    bottomContent: {
        title: string;
        description: string;
        codeLabel: string;
    };
}

const SushiSplitCard: React.FC<SushiSplitCardProps> = ({
    theme,
    title,
    topContent,
    bottomContent
}) => {
    return (
        <div
            className="w-full transition-all duration-200 group"
            style={{
                border: `${theme.borderWidth} solid ${theme.colors.border}`,
                boxShadow: theme.shadow,
            }}
        >
            {/* HEADER */}
            <div
                className="p-3 text-center border-b-4"
                style={{
                    backgroundColor: theme.colors.primary,
                    color: '#FFFFFF', // Always white on primary
                    borderColor: theme.colors.border,
                    fontFamily: theme.fonts.heading
                }}
            >
                <h3 className="italic text-xl">{title}</h3>
            </div>

            {/* TOP HALF (Service) */}
            <div
                className="p-8 border-b-4 relative h-64 flex flex-col justify-between"
                style={{
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border
                }}
            >
                <div>
                    {topContent.icon && (
                        <div className="mb-4 text-primary" style={{ color: theme.colors.primary }}>
                            {topContent.icon}
                        </div>
                    )}
                    <h4
                        className={`${theme.fonts.heading} text-2xl font-bold mb-2`}
                        style={{ color: theme.colors.text.heading }}
                    >
                        {topContent.title}
                    </h4>
                    <p
                        className={`${theme.fonts.body} text-sm leading-relaxed`}
                        style={{ color: theme.colors.text.body }}
                    >
                        {topContent.description}
                    </p>
                </div>

                <button className={`${theme.fonts.heading} italic flex items-center`} style={{ color: theme.colors.secondary }}>
                    Details <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>

            {/* BOTTOM HALF (Product) */}
            <div
                className="p-8 relative h-64 flex flex-col justify-between overflow-hidden"
                style={{
                    backgroundColor: theme.name === 'storefront' ? '#F3F4F6' : '#000000', // Grey for Store, Black for Factory
                    color: theme.name === 'storefront' ? theme.colors.primary : '#00FF00'
                }}
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Box className="w-6 h-6" />
                        <span
                            className="text-xs px-1 text-white"
                            style={{ backgroundColor: theme.colors.primary, fontFamily: theme.fonts.mono }}
                        >
                            {bottomContent.codeLabel}
                        </span>
                    </div>
                    <h4
                        className={`${theme.fonts.mono} text-xl font-bold mb-2`}
                        style={{ color: theme.colors.text.heading }}
                    >
                        {bottomContent.title}
                    </h4>
                    <p
                        className={`${theme.fonts.mono} text-xs leading-relaxed opacity-80`}
                        style={{ color: theme.colors.text.body }}
                    >
                        {bottomContent.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SushiSplitCard;
