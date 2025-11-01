


import Title from '@/app/(mainlayout)/H&F/Title';
import React from 'react';
import HeroAbout from './Componenets/Fixed/HeroAbout';
import ServicesAbout from './Componenets/Fixed/ServicesAbout';
import TestiAbout from './Componenets/Fixed/TestiAbout';
import ProAbout from './Componenets/Fixed/ProAbout';

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


            <div> <div className='flex justify-center container mx-auto pt-14'> <Title gud="What my clients think about me" voda="Testimonials"></Title></div>



                <TestiAbout></TestiAbout></div>





            <div className='py-8 text=start flex container mx-auto'>



                <Title gud="Get started with my services" voda="Choose a Plan"></Title>

            </div>


                <ProAbout></ProAbout>




        </div>
    );
};

export default page;