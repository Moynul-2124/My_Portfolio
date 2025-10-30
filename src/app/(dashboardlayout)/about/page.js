


import Title from '@/app/(mainlayout)/H&F/Title';
import React from 'react';
import HeroAbout from './Componenets/Fixed/HeroAbout';
import ServicesAbout from './Componenets/Fixed/ServicesAbout';

const page = () => {
    return (
        <div className='bg-black text-white min-h-screen'>



            <div className='py-8'>



                <Title gud="Get to know me" voda="About Me"></Title>

            </div>




            <HeroAbout></HeroAbout>



            <div className='py-8 text=start flex container mx-auto'>



                <Title gud="Services i offer to my clients" voda="My Services"></Title>

            </div>



                    <ServicesAbout></ServicesAbout>











        </div>
    );
};

export default page;