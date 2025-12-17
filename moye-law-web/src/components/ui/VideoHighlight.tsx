"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RevealContent } from './MondrianGrid';

interface VideoHighlightProps {
    title: string;
    description: string[]; // Array of paragraphs
    mediaSrc: string; // Video or Image URL
    mediaType: 'video' | 'image';
    mediaAlt?: string;
    callToAction?: string;
    className?: string;
}

export const VideoHighlight: React.FC<VideoHighlightProps> = ({
    title,
    description,
    mediaSrc,
    mediaType,
    mediaAlt = "",
    callToAction,
    className = ""
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Auto-loop video at 7s interval (from legacy logic)
    useEffect(() => {
        if (mediaType !== 'video') return;

        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.currentTime >= 7) {
                video.currentTime = 0;
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [mediaType]);

    // Split paragraphs: First 2 paragraphs next to video, rest below
    const primaryText = description.slice(0, 2);
    const secondaryText = description.slice(2);

    return (
        <div className={`py-12 ${className}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* LEFT COLUMN: Title & Intro Text */}
                <div className="lg:col-span-5">
                    <RevealContent>
                        <h2 className="font-display text-4xl text-navy mb-8 leading-tight">
                            {title}
                        </h2>
                        <div className="prose prose-lg text-gray-600 font-sans">
                            {primaryText.map((para, idx) => (
                                <p key={idx} className="mb-6 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </RevealContent>
                </div>

                {/* RIGHT COLUMN: Media Frame */}
                <div className="lg:col-span-7 relative">
                    <RevealContent delay={0.3}>
                        <div className="relative p-4 bg-white border-4 border-navy shadow-[8px_8px_0px_0px_rgba(10,35,66,0.2)]">
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                {mediaType === 'video' ? (
                                    <>
                                        <video
                                            ref={videoRef}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src={mediaSrc} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-navy/20 mix-blend-multiply pointer-events-none"></div>
                                    </>
                                ) : (
                                    <div className="w-full h-full relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={mediaSrc}
                                            alt={mediaAlt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-navy/20 mix-blend-multiply pointer-events-none"></div>
                                    </div>
                                )}
                            </div>

                            {/* Mondrian Accents */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold -z-10"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-24 bg-navy -z-10"></div>
                        </div>
                        {mediaAlt && <p className="mt-4 text-xs font-mono text-gray-400 text-right">{mediaAlt}</p>}
                    </RevealContent>
                </div>

                {/* BOTTOM ROW: Remaining Text (Full Width) */}
                {secondaryText.length > 0 && (
                    <div className="lg:col-span-12 mt-8">
                        <RevealContent delay={0.5}>
                            <div className="prose prose-lg text-gray-600 font-sans max-w-4xl">
                                {secondaryText.map((para, idx) => (
                                    <p key={idx} className="mb-6 leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            {callToAction && (
                                <div className="mt-8 font-display text-2xl text-navy border-b-2 border-gold inline-block pb-1">
                                    {callToAction}
                                </div>
                            )}
                        </RevealContent>
                    </div>
                )}
            </div>
        </div>
    );
};
