



import React from 'react';
import Cross from './FixedCompo/Cross';
import Title from '@/app/(mainlayout)/H&F/Title';
import CertResume from './FixedCompo/CertResume';

const page = () => {
    return (
        <div className='bg-black min-h-screen tracking-wide text-white'>
            <div>


                <Cross></Cross>


                <Title gud="Check out my Resume" voda="Resume"></Title>


                <div>
                        <CertResume></CertResume>

                </div>






            </div>
        </div>
    );
};

export default page;