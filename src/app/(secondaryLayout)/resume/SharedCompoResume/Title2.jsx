


import React from 'react';

const Title2 = ({ gud, voda }) => {
    return (
        <div>
            <div className='text-center flex flex-col gap-6'>


                <p className=' text-xl font-semibold text-gray-500 transition-opacity'>{gud}</p>
                <p className='text-5xl  font-bold transition-shadow'>{voda}</p>



                



            </div>
        </div>
    );
};

export default Title2;