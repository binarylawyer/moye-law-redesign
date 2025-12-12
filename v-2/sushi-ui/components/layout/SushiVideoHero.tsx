import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SushiVideoHeroProps {
    title: string;
    subtitle: string;
    videoSrc?: string;
    heightClass?: string; // e.g., 'h-screen', 'h-[60vh]', 'h-[500px]'
    primaryAction?: {
        label: string;
        path: string;
    };
    secondaryAction?: {
        label: string;
        path: string;
    };
}

const SushiVideoHero: React.FC<SushiVideoHeroProps> = ({
    title,
    subtitle,
    videoSrc = "/videos/legal-craftsmanship.mp4",
    heightClass = "h-[60vh]", // Default to sub-full screen for internal pages
    primaryAction,
    secondaryAction
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Simple parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const scrollY = window.scrollY;
                // Move video slightly slower than scroll
                videoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
                videoRef.current.style.opacity = Math.max(0.4, 1 - (scrollY * 0.002)).toString();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`relative w-full overflow-hidden bg-black ${heightClass}`}>

            {/* 1. BACKGROUND VIDEO */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                {/* Overlay for legibility */}
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

                {/* Mondrian Lines Overlay (Optional Artistic Touch) */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 right-[20%] w-px h-full bg-white/20"></div>
                    <div className="absolute bottom-[30%] left-0 w-full h-px bg-white/20"></div>
                </div>
            </div>

            {/* 2. CONTENT */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl pt-20"> {/* PT to clear nav roughly */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md"
                        >
                            {subtitle}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            {primaryAction && (
                                <Link
                                    to={primaryAction.path}
                                    className="inline-flex items-center px-8 py-3 bg-[#C99D56] text-white hover:bg-[#b08845] transition-colors border border-[#C99D56] font-medium tracking-wide shadow-lg"
                                >
                                    {primaryAction.label}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            )}

                            {secondaryAction && (
                                <Link
                                    to={secondaryAction.path}
                                    className="inline-flex items-center px-8 py-3 bg-transparent text-white border border-white/40 hover:bg-white/10 transition-colors font-medium tracking-wide"
                                >
                                    {secondaryAction.label}
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM BORDER (Mondrian Strip) */}
            <div className="absolute bottom-0 w-full h-2 flex">
                <div className="w-1/4 bg-mondrian-red"></div>
                <div className="w-1/4 bg-mondrian-blue"></div>
                <div className="w-1/4 bg-mondrian-yellow"></div>
                <div className="w-1/4 bg-gray-900"></div>
            </div>

        </div>
    );
};

export default SushiVideoHero;
