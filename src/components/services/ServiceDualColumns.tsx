import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, Database, Cpu, Lock } from 'lucide-react';

interface ServiceDualColumnsProps {
  title?: string;
  description?: string;
  leftContent?: {
    title: string;
    description: string;
  }[];
  rightContent?: {
    icon: React.ReactNode;
    label: string;
    color: string;
  }[];
}

const ServiceDualColumns: React.FC<ServiceDualColumnsProps> = ({ 
  title = "Technical Innovation",
  description = "Our approach leverages cutting-edge tools and methodologies to deliver sophisticated legal solutions that address complex challenges while maximizing strategic opportunities.",
  leftContent,
  rightContent
}) => {
  // Default left content if none provided
  const defaultLeftContent = [
    {
      title: "Advanced Analysis",
      description: "AI-enhanced document analysis and data processing that delivers precision and efficiency without sacrificing quality or oversight."
    },
    {
      title: "Strategic Implementation",
      description: "Methodical execution of legal frameworks utilizing secure digital systems and advanced project management techniques."
    }
  ];

  // Default right content if none provided
  const defaultRightContent = [
    {
      icon: <Cpu className="text-[#003B98] mb-4" size={48} />,
      label: "AI Integration",
      color: "bg-white"
    },
    {
      icon: <Database className="text-navy mb-4" size={48} />,
      label: "Data Systems",
      color: "bg-[#FFD500]"
    },
    {
      icon: <Lock className="text-white mb-4" size={48} />,
      label: "Security Protocols",
      color: "bg-[#D6001C]"
    },
    {
      icon: <Zap className="text-navy mb-4" size={48} />,
      label: "Efficiency Tools",
      color: "bg-white"
    }
  ];

  // Use provided content or defaults
  const finalLeftContent = leftContent || defaultLeftContent;
  const finalRightContent = rightContent || defaultRightContent;

  return (
    <div className="container mx-auto px-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Left: Text content */}
        <motion.div 
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl text-navy mb-6">{title}</h2>
          <p className="text-xl text-navy/70 mb-10 leading-relaxed">
            {description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finalLeftContent.map((content, index) => (
              <div 
                key={index} 
                className={`border-l-4 ${index % 2 === 0 ? 'border-[#003B98]' : 'border-[#D6001C]'} pl-6`}
              >
                <h3 className="font-display text-2xl text-navy mb-3">{content.title}</h3>
                <p className="text-navy/70">
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Right: Geometric design with icons */}
        <motion.div 
          className="md:col-span-5 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {finalRightContent.map((content, index) => (
              <div 
                key={index} 
                className={`${content.color} p-8 border-4 border-black flex flex-col items-center justify-center text-center`}
              >
                {content.icon}
                <p className="font-display text-navy">{content.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDualColumns; 