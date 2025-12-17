"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Lock, Sparkles } from "lucide-react";
import Link from 'next/link';

interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export const FAQChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            text: "Hello! I am the Moye Law Assistant. You can ask me about our services, estate planning, digital assets, or intellectual property. How can I help you today?",
            isUser: false,
            timestamp: new Date()
        }
    ]);

    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const getAnswer = (question: string): string => {
        const q = question.toLowerCase();

        if (q.includes('retain') || q.includes('hire')) return "We have a conflict-check process for onboarding. Once cleared, we'll set up your private locker.";
        if (q.includes('fee') || q.includes('cost')) return "We offer both flat fee and hourly arrangements depending on complexity. Transparency is key, and we discuss costs upfront.";
        if (q.includes('estate') && (q.includes('time') || q.includes('long'))) return "Most estate plans are drafted within a week of receiving your documents.";
        if (q.includes('crypto') || q.includes('bitcoin')) return "Crypto is treated as property for tax purposes. You must track cost basis. Our Digital Asset team can advise on compliance.";

        return "That's a nuanced question. It would be best to discuss this with our attorneys directly via a consultation.";
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        setTimeout(() => {
            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: getAnswer(userMsg.text),
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto shadow-2xl border-4 border-navy">
            {/* Header */}
            <div className="bg-navy p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="font-display tracking-wider">Moye AI Concierge</span>
                </div>
                <Link href="/contact" className="text-xs uppercase hover:text-yellow-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Premium Access
                </Link>
            </div>

            {/* Chat Area */}
            <div className="bg-gray-50 h-[500px] overflow-y-auto p-6 space-y-6">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex max-w-[85%] ${msg.isUser ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                            {/* Avatar */}
                            <div className={`w-10 h-10 flex items-center justify-center border-2 border-navy ${msg.isUser ? 'bg-navy text-white' : 'bg-yellow-400 text-navy'}`}>
                                {msg.isUser ? <User size={18} /> : <Bot size={18} />}
                            </div>

                            {/* Bubble */}
                            <div className={`p-4 border-2 border-navy relative ${msg.isUser ? 'bg-white' : 'bg-white'}`}>
                                <p className="text-sm font-medium text-navy leading-relaxed">{msg.text}</p>
                                <span className="text-[10px] text-gray-400 mt-2 block">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>

                                {/* Decorative Corner */}
                                <div className={`absolute w-2 h-2 ${msg.isUser ? 'bg-navy bottom-0 right-0' : 'bg-yellow-400 top-0 left-0'}`}></div>
                            </div>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="flex max-w-[85%] flex-row gap-3">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-navy bg-yellow-400 text-navy">
                                <Sparkles size={18} className="animate-spin" />
                            </div>
                            <div className="p-4 border-2 border-navy bg-white flex items-center gap-1">
                                <div className="w-2 h-2 bg-navy animate-bounce"></div>
                                <div className="w-2 h-2 bg-navy animate-bounce delay-75"></div>
                                <div className="w-2 h-2 bg-navy animate-bounce delay-150"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t-4 border-navy">
                <form onSubmit={handleSubmit} className="flex gap-0">
                    <input
                        className="flex-grow p-4 bg-gray-50 border-2 border-r-0 border-navy focus:outline-none focus:bg-white transition-colors font-mono text-sm"
                        placeholder="Ask about Estate Planning, Crypto, or Fees..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-navy text-white px-8 border-2 border-navy hover:bg-yellow-400 hover:text-navy transition-colors font-bold uppercase disabled:opacity-50"
                        disabled={isLoading}
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};
