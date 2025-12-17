import React from 'react';

const MondrianClassicComposition: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[200px] border-4 border-black bg-white flex flex-col">
            {/* Top Row */}
            <div className="flex h-1/3 border-b-4 border-black">
                <div className="w-1/3 border-r-4 border-black bg-[#D6001C]"></div>
                <div className="w-2/3 bg-white"></div>
            </div>

            {/* Middle Row */}
            <div className="flex h-1/3 border-b-4 border-black">
                <div className="w-2/3 border-r-4 border-black bg-white"></div>
                <div className="w-1/3 bg-[#003B98]"></div>
            </div>

            {/* Bottom Row */}
            <div className="flex h-1/3">
                <div className="w-1/4 border-r-4 border-black bg-[#FFD500]"></div>
                <div className="w-3/4 bg-white"></div>
            </div>
        </div>
    );
};

export default MondrianClassicComposition;
