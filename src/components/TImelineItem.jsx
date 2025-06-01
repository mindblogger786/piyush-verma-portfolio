import React from 'react';

const TimelineItem = ({ year, duration, company, designation, description, isEven }) => {
    return (
        <div className="relative mb-10 flex flex-col md:flex-row items-center">
            {/* Connector Line - Vertical */}
            <div className="left-0 absolute top-0 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 z-0"></div>

            {/* Date Content */}
            <div className={`relative -top-[20px] md:top-0 md:w-1/2 w-full ${isEven ? 'md:order-2 text-right' : 'md:order-1 text-left'}`}>
                <div className="relative w-[100px] md:w-[125px] h-[100px] md:h-[125px] mx-auto my-6">
                    {/* Outer Rings */}
                    <div className="absolute top-[10px] w-full h-full rounded-full border-2 border-primary z-10">
                        {/* Text Inside Circle */}
                        <div className="flex items-center justify-center h-full w-full text-center">
                            <span className="block text-sm md:text-lg font-bold">{duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Content */}
            <div className={`md:w-1/2 w-full px-6 ${isEven ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'}`}>
                <div className="group">
                    <h5 className="text-ls md:text-xl font-bold mb-3">{company} <br /> <span className='text-sm'>{designation}</span></h5>
                    <p className="text-sm">{description}</p>
                </div>
            </div>

            {/* Center Dot */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-0.5 w-[25px] h-[25px] z-20">
                <div className="relative w-[18px] h-[18px]">
                    <div className="absolute inset-0 rounded-full w-full h-full border-2 border-gray-600 z-10 right-[7px] border-primary"></div>
                    <div className="absolute inset-0 rounded-full w-full h-full border-2 border-gray-200 left-[7px] border-primary"></div>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className={`hidden md:block absolute top-1/2 w-[180px] h-5 ${isEven ? 'left-1/2': 'right-1/2'}`}>
                <div className={`relative w-full h-full flex items-center ${isEven ? 'justify-end right-[2px]' : 'justify-start left-[2px]'}`} >
                    <div className="absolute w-[167px] h-0.3 border-1 border-primary"></div>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
