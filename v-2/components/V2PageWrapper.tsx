import React from 'react';
import NavBarV2 from './NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import '../styles/mondrian-reset.css'; // Global V2 Reset

interface V2PageWrapperProps {
    children: React.ReactNode;
    showNav?: boolean;
    showFooter?: boolean;
    className?: string;
}

const V2PageWrapper: React.FC<V2PageWrapperProps> = ({
    children,
    showNav = true,
    showFooter = true,
    className = ""
}) => {
    return (
        <div className={`v2-scope min-h-screen bg-white font-sans selection:bg-navy selection:text-gold ${className}`}>
            {showNav && <NavBarV2 />}

            <main>
                {children}
            </main>

            {showFooter && <TerminalFooter />}
        </div>
    );
};

export default V2PageWrapper;
