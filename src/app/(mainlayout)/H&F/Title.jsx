



import React from 'react';

const Title = ({ gud, voda }) => {
    return (
        <div>
            <div className='text-center flex flex-col gap-6'>


                <p className=' text-xl font-semibold text-gray-500 transition-opacity'>{gud}</p>
                <p className='text-5xl font-bold transition-shadow'>{voda}</p>



                {/* Animated Line */}
                <div className="flex justify-center mt-4">
                    <div className="w-32 h-[4px] bg-green-600 rotate-line"></div>
                </div>



            </div>
        </div>
    );
};

export default Title;