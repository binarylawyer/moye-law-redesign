"use client";

import React from 'react';
import { RevealContent } from './MondrianGrid';

interface TimelineStepProps {
    number: number;
    title: string;
    description: string;
    details?: string[];
    isEven: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ number, title, description, details, isEven }) => (
    <div className={`relative mb-12 flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* CENTER CIRCLE */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-10 h-10 rounded-full border-4 border-navy bg-white flex items-center justify-center z-10 shadow-lg">
            <span className="font-mono text-sm font-bold text-navy">{number}</span>
        </div>

        {/* CONTENT CARD */}
        <div className={`md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
            <RevealContent delay={0.2 * Math.min(number, 5)}>
                <div className="bg-white border-2 border-navy rounded-md p-6 shadow-[4px_4px_0px_0px_rgba(10,35,66,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h3 className="font-display text-xl text-navy mb-2">{title}</h3>
                    <p className="font-sans text-gray-600 mb-4">{description}</p>

                    {details && details.length > 0 && (
                        <ul className="space-y-2 border-t border-dashed border-gray-200 pt-4">
                            {details.map((task, idx) => (
                                <li key={idx} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-500">{task}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </RevealContent>
        </div>
    </div>
);

interface ProcessTimelineProps {
    steps: {
        title: string;
        description: string;
        details?: string[];
    }[];
    className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, className = "" }) => {
    return (
        <div className={`relative max-w-5xl mx-auto py-12 ${className}`}>
            {/* VERTICAL LINE */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-navy opacity-20"></div>

            {steps.map((step, index) => (
                <TimelineStep
                    key={index}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    details={step.details}
                    isEven={index % 2 === 1}
                />
            ))}
        </div>
    );
};
