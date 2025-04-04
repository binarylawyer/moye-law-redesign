import React, { useState, useRef, useEffect } from 'react';
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Send, User, Bot, Lock, LogIn } from "lucide-react";
import { Link } from 'react-router-dom';

// Chat message type
interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ClientChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Welcome to Moye Law's client assistant. This premium service is connected to our advanced AI system and has access to your case details. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Simulate checking authentication on load
  useEffect(() => {
    // In a real app, this would check for an auth token or session
    const checkAuth = async () => {
      // Simulating authentication check delay
      setTimeout(() => {
        // For demo purposes, we'll default to not authenticated
        setIsAuthenticated(false);
      }, 500);
    };
    
    checkAuth();
  }, []);
  
  // Simulated API call to OpenAI or similar service
  const callAIAPI = async (userMessage: string) => {
    // This would be a real API call in production
    // For now, we'll simulate a response
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Simulate personalized responses that would come from a real API
        if (userMessage.toLowerCase().includes('my case')) {
          resolve("I can see from your case details that your last filing was on June 15th. Your attorney, Sarah Johnson, has scheduled your next consultation for July 3rd at 2:00 PM. Would you like me to provide more specific information about your case?");
        } else if (userMessage.toLowerCase().includes('document') || userMessage.toLowerCase().includes('upload')) {
          resolve("You can upload documents directly to your client portal. I see you have 3 pending documents that need your signature. Would you like me to guide you through the process?");
        } else if (userMessage.toLowerCase().includes('bill') || userMessage.toLowerCase().includes('payment')) {
          resolve("Your current balance is $0. Your last payment of $1,200 was processed on May 28th. The next invoice will be generated after your July consultation. Would you like to review your billing history?");
        } else {
          resolve("As your dedicated AI assistant, I have access to your specific case details and can provide personalized guidance based on your legal situation. Please ask about your case, documents, upcoming appointments, or billing, and I'll provide detailed information specific to you.");
        }
      }, 1500);
    });
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Only call AI API if authenticated
    if (isAuthenticated) {
      callAIAPI(inputValue).then(response => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: response,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      });
    } else {
      // If not authenticated, prompt to log in
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "I'm sorry, but this premium service is only available to authenticated clients. Please log in to access your personalized legal assistant with case-specific information.",
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    }
  };
  
  const handleLogin = () => {
    // In a real app, this would open a login modal or redirect to login page
    // For demo purposes, we'll just simulate successful login
    setIsAuthenticated(true);
    
    // Add system message about successful login
    const systemMessage: ChatMessage = {
      id: Date.now().toString(),
      text: "You've been successfully authenticated. Welcome back! I now have access to your case details and can provide personalized assistance.",
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, systemMessage]);
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="pt-48 bg-white">
      <ResourcePageHeader 
        title="Client Legal Assistant"
        description="Your premium AI assistant with access to your case details and personalized legal guidance."
        variant="blue"
      />

      {/* Chat interface */}
      <section className="py-12 md:py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Status and authentication indicator */}
            <div className="bg-white p-4 rounded-t-lg border border-gray-200 border-b-0 flex justify-between items-center">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${isAuthenticated ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm font-medium">
                  {isAuthenticated ? "Premium Client Assistant (Connected)" : "Premium Client Assistant (Not Authenticated)"}
                </span>
              </div>
              
              {!isAuthenticated && (
                <button 
                  onClick={handleLogin}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <LogIn size={16} className="mr-1" />
                  Login as client
                </button>
              )}
            </div>
            
            {/* Security badge for premium version */}
            {isAuthenticated && (
              <div className="bg-blue-50 px-4 py-2 border-x border-gray-200 flex items-center">
                <Lock size={14} className="text-blue-600 mr-2" />
                <span className="text-xs text-blue-800">
                  Secure, encrypted connection with access to your client information
                </span>
              </div>
            )}
            
            <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Chat messages area */}
              <div className="p-4 h-[500px] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'ml-3 mondrian-blue text-white' : 'mr-3 mondrian-blue bg-blue-500'}`}>
                          {message.isUser ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div 
                          className={`p-3 rounded-lg ${message.isUser 
                            ? 'bg-navy text-white rounded-tr-none' 
                            : 'bg-blue-50 text-gray-800 rounded-tl-none'}`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <span className="block text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                          <Bot size={16} />
                        </div>
                        <div className="p-3 rounded-lg bg-blue-50 text-gray-800 rounded-tl-none">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '0ms'}}></div>
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '150ms'}}></div>
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '300ms'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Chat input area */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <form onSubmit={handleSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={isAuthenticated ? "Ask about your case, documents, or billing..." : "Please login to access your personalized assistant..."}
                    className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Additional help text and free version link */}
            <div className="mt-8 text-center">
              <p className="text-black/80 text-sm mb-4">
                This premium AI assistant is available exclusively to Moye Law clients.
              </p>
              <Link to="/resources/faq" className="text-sm text-blue-600 hover:underline">
                Not a client? Try our free general assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
};

export default ClientChat; 