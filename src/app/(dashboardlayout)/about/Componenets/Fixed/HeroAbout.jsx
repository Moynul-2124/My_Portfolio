



import React from 'react';
import CVManager from '../Shared/CVManager';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const HeroAbout = async () => {

    const dhon = await fetch("http://localhost:4004/posts")

    const mon = await dhon.json()


    const pussy = await fetch("http://localhost:4004/comments")

    const biral = await pussy.json()

    const chushi = await fetch("http://localhost:4004/profile")

    const blowjobdao = await chushi.json()

    return (
        <div>
            <div>

                {mon.map((nunu) => (


                    <div key={nunu.id}>

                        <div className="hero bg-black py-12 min-h-screen">
                            <div className="hero-content flex-col lg:flex-row">
                                <div className='flex justify-center container mx-auto gap-14'>



                                    <img width={400} className=' rounded-r-[79px]   opacity-260 z-50  mx-auto' src={nunu.image} alt="Myself" />

                                    <div className='flex flex-col   gap-6 '>

                                        <div>

                                            <h1 className='text-[24px] translate-y-4  font-bold hover:animate-bounce  text-green-600'>{nunu.views}</h1>

                                        </div>

                                        <div>
                                            <h1 className="text-[31px] tracking-wide opacity-90 font-extrabold">{nunu.title}</h1>
                                            <div className="py-6">
                                                {biral.map((gudu) => (



                                                    <div key={gudu.id}>

                                                        <h1 className='text-gray-300 mx-auto  h-[144px] border-b-2 tracking-wider opacity-70'>{gudu.await}</h1>

                                                    </div>


                                                ))}
                                            </div>

                                        </div>

                                        <div className='flex opacity-85 text-gray-400 justify-start gap-44'>

                                            <div className='flex flex-col gap-4'>



                                                <h1><span className='font-bold text-white'>Name:</span>  {blowjobdao.name}</h1>
                                                <h1><span className='text-white font-bold'>Age:</span>  {blowjobdao.age}</h1>





                                            </div>
                                            <div className='flex flex-col gap-4'>



                                                <h1><span className='font-bold text-white'>Email:</span>  {blowjobdao.email}</h1>
                                                <h1><span className='font-bold text-white'>From:</span>  {blowjobdao.from}</h1>





                                            </div>

                                        </div>


                                        <div className='flex justify-between -translate-y-2 items-center mt-4'>


                                            <CVManager></CVManager>

                                            <div className="flex items-center justify-center gap-4">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                    <FaTwitter className="text-white text-2xl social-icon" />
                                                </a>
                                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedin className="text-white text-2xl social-icon" />
                                                </a>
                                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                                    <FaGithub className="text-white text-2xl social-icon" />
                                                </a>
                                            </div>

                                        </div>
                                    </div>









                                </div>












                            </div>





                        </div>




                                                    















                    </div>


                ))}




            </div>
        </div>
    );
};

export default HeroAbout;