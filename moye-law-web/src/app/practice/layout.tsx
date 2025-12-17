import React from 'react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";

export default function PracticeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />
            <main>
                {children}
            </main>
            <TerminalFooter />
        </div>
    );
}
