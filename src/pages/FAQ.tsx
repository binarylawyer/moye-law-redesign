import React, { useState, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Send, User, Bot } from "lucide-react";

// Chat message type
interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FAQ: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I am Moye Law's assistant. How can I help you today? You can ask me about our services, estate planning, digital assets, intellectual property, or anything else related to our legal services.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Predefined answers based on common questions
  const getAnswer = (question: string): string => {
    const lowerCaseQuestion = question.toLowerCase();
    
    if (lowerCaseQuestion.includes('retain') || lowerCaseQuestion.includes('hire')) {
      return "We have a client onboarding process where we ensure there are no conflicts of interest. Once completed, we'll set up your private client locker for accessing our services.";
    }
    
    if (lowerCaseQuestion.includes('fee') || lowerCaseQuestion.includes('cost') || lowerCaseQuestion.includes('price')) {
      return "Our fee structure varies depending on the complexity of your legal needs. We offer both flat fee arrangements for certain services and hourly billing for more complex matters. We believe in transparent pricing and discuss all fee arrangements upfront during our initial consultation.";
    }
    
    if (lowerCaseQuestion.includes('estate plan') && (lowerCaseQuestion.includes('time') || lowerCaseQuestion.includes('long'))) {
      return "We can usually complete an estate plan in less than a week once you've provided all necessary documentation. The timeline depends on the complexity of your estate and how quickly you can gather the required information.";
    }
    
    if (lowerCaseQuestion.includes('estate plan') && lowerCaseQuestion.includes('move')) {
      return "Yes, it's highly recommended to review and potentially update your estate plan when you move to a new state. Estate laws vary significantly between states, and documents valid in your previous state may not function as intended under your new state's laws.";
    }
    
    if (lowerCaseQuestion.includes('copyright') || (lowerCaseQuestion.includes('creative') && lowerCaseQuestion.includes('work'))) {
      return "Copyright protection automatically applies to original works of authorship fixed in a tangible medium of expression. This includes literary works, music, art, and more. The work must demonstrate some minimal degree of creativity, but the threshold is quite low. We can help assess your specific work and determine the best protection strategy.";
    }
    
    if (lowerCaseQuestion.includes('trademark') && lowerCaseQuestion.includes('service mark')) {
      return "Trademarks and service marks both function as source identifiers, but they apply to different offerings. A trademark identifies the source of goods (physical products), while a service mark identifies the source of services. Both are protected under the same legal framework and can be registered with the USPTO.";
    }
    
    if ((lowerCaseQuestion.includes('artist') || lowerCaseQuestion.includes('art')) && lowerCaseQuestion.includes('contract')) {
      return "Artists should carefully review gallery contracts for commission percentages, exclusivity arrangements, territory limitations, contract duration, payment schedules, expenses, insurance, copyright permissions, and termination conditions. We recommend having these contracts reviewed by an attorney specialized in art law.";
    }
    
    if ((lowerCaseQuestion.includes('crypto') || lowerCaseQuestion.includes('bitcoin') || lowerCaseQuestion.includes('digital currency')) && lowerCaseQuestion.includes('tax')) {
      return "Cryptocurrency transactions are subject to capital gains tax treatment in most cases. The IRS treats cryptocurrency as property, not currency. This means you must track the cost basis of each acquisition and calculate gains or losses upon sale or exchange. Mining, staking, and receiving airdrops may also create taxable events.";
    }
    
    if (lowerCaseQuestion.includes('digital') && lowerCaseQuestion.includes('estate')) {
      return "Including digital assets in your estate plan requires specialized documentation that grants your fiduciaries legal authority to access and manage these assets. This includes creating a comprehensive digital asset inventory, secure methods for passing access credentials, and explicit authorization language in your estate planning documents.";
    }
    
    // Default response if no match
    return "That's a great question. It would be best to discuss this with our attorneys directly. Would you like to schedule a consultation to get personalized advice for your situation?";
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
    
    // Simulate API call delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getAnswer(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };
  
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        <ResourcePageHeader 
          title="Ask Our Legal Assistant"
          description="Get quick answers to your legal questions with our AI assistant."
          variant="yellow"
        />

        {/* Chat interface */}
        <section className="py-12 md:py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Chat messages area */}
              <div className="p-4 h-[500px] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'ml-3 mondrian-blue text-white' : 'mr-3 mondrian-yellow'}`}>
                          {message.isUser ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div 
                          className={`p-3 rounded-lg ${message.isUser 
                            ? 'bg-navy text-white rounded-tr-none' 
                            : 'bg-gray-100 text-gray-800 rounded-tl-none'}`}
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
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mr-3 mondrian-yellow">
                          <Bot size={16} />
                        </div>
                        <div className="p-3 rounded-lg bg-gray-100 text-gray-800 rounded-tl-none">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0ms'}}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '150ms'}}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '300ms'}}></div>
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
                    placeholder="Type your question here..."
                    className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                  <button 
                    type="submit" 
                    className="bg-navy text-white py-2 px-4 rounded-r-md hover:bg-navy/90 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Additional help text */}
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="text-black/80 text-sm">
                Need more personalized assistance? Our legal team is ready to help.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
