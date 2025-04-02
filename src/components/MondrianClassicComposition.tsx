import React from 'react';

interface MondrianClassicCompositionProps {
  className?: string;
  width?: string;
  height?: string;
}

const MondrianClassicComposition: React.FC<MondrianClassicCompositionProps> = ({
  className = '',
  width = 'w-full',
  height = 'h-full'
}) => {
  return (
    <div className={`${width} ${height} border-4 border-black relative ${className}`}>
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-0">
        {/* Top row */}
        <div className="col-span-2 row-span-1 mondrian-red border-r-4 border-b-4 border-black"></div>
        <div className="col-span-1 row-span-2 mondrian-white border-b-4 border-black"></div>
        
        {/* Middle row */}
        <div className="col-span-1 row-span-1 mondrian-white border-r-4 border-b-4 border-black"></div>
        <div className="col-span-1 row-span-1 mondrian-blue border-r-4 border-b-4 border-black"></div>
        
        {/* Bottom row */}
        <div className="col-span-2 row-span-1 mondrian-yellow border-r-4 border-black"></div>
        <div className="col-span-1 row-span-1 mondrian-blue"></div>
      </div>
    </div>
  );
};

export default MondrianClassicComposition; 