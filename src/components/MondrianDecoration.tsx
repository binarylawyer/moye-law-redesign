import React from 'react';

interface MondrianDecorationProps {
  position: 'left' | 'right';
  variant?: 1 | 2 | 3 | 4 | 5;
}

const MondrianDecoration: React.FC<MondrianDecorationProps> = ({ 
  position, 
  variant = 1 
}) => {
  // Different variations of Mondrian compositions for variety
  const renderVariant = () => {
    switch (variant) {
      case 1:
        return (
          <div className="w-24 h-32 border-4 border-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-3/5 mondrian-red border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-0 right-0 w-1/2 h-2/5 mondrian-white border-b-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-3/5 mondrian-light-blue"></div>
            <div className="absolute bottom-2/5 left-0 w-1/2 h-2/5 mondrian-light-yellow"></div>
          </div>
        );
      case 2:
        return (
          <div className="w-24 h-36 border-4 border-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2/3 h-1/2 mondrian-blue border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 mondrian-white border-b-4 border-black"></div>
            <div className="absolute top-1/3 right-0 w-1/3 h-1/3 mondrian-light-yellow border-b-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 mondrian-yellow"></div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 mondrian-white"></div>
          </div>
        );
      case 3:
        return (
          <div className="w-32 h-24 border-4 border-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/4 h-2/3 mondrian-light-blue border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/3 mondrian-white border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/2 mondrian-red border-b-4 border-black"></div>
            <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 mondrian-yellow border-r-4 border-b-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 mondrian-white"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 mondrian-light-yellow"></div>
            <div className="absolute bottom-1/2 right-0 w-1/4 h-1/2 mondrian-white"></div>
          </div>
        );
      case 4:
        return (
          <div className="w-28 h-28 border-4 border-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2/3 h-1/3 mondrian-red border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-0 right-0 w-1/3 h-2/3 mondrian-white border-b-4 border-black"></div>
            <div className="absolute top-1/3 left-0 w-1/3 h-1/3 mondrian-white border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 mondrian-light-blue border-r-4 border-b-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/3 mondrian-light-yellow"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 mondrian-blue"></div>
          </div>
        );
      case 5:
        return (
          <div className="w-20 h-40 border-4 border-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/5 mondrian-yellow border-b-4 border-black"></div>
            <div className="absolute top-1/5 left-0 w-1/2 h-2/5 mondrian-white border-r-4 border-b-4 border-black"></div>
            <div className="absolute top-1/5 right-0 w-1/2 h-1/5 mondrian-blue border-b-4 border-black"></div>
            <div className="absolute top-2/5 right-0 w-1/2 h-1/5 mondrian-light-yellow border-b-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-2/5 mondrian-light-blue"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-2/5 mondrian-red"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const positionClass = position === 'left' 
    ? 'float-left mr-8 mb-6' 
    : 'float-right ml-8 mb-6';

  return (
    <div className={`${positionClass} reveal`} style={{ zIndex: 10 }}>
      {renderVariant()}
    </div>
  );
};

export default MondrianDecoration; 