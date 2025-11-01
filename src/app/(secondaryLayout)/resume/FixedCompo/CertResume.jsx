



import Link from "next/link";
import Title from '@/app/(mainlayout)/H&F/Title';
import React from 'react';
import Title2 from '../SharedCompoResume/Title2';

const CertResume = async () => {

    const dhon = await fetch("http://localhost:4004/education")

    const mon = await dhon.json()

    const nunu = await fetch("http://localhost:4004/experience")

    const gudu = await nunu.json()

    const pussy = await fetch("http://localhost:4004/skills")

    const fazila = await pussy.json()

    const tabiharma = await fetch("http://localhost:4004/officeTour")

    const motapasa = await tabiharma.json()


    return (
        <div>


            <div className='flex justify-center'> <div className='flex flex-col container py-14 mx-auto justify-start items-center'>

                <div className='text-[#6A221C]'><Title voda="Education"></Title></div>

                <div className='flex pt-6 flex-col '>



                    {mon.map((chumu) => (



                        <div key={chumu.id} className="bg-gradient-to-br from-gray-800 to-[#76929E] border-l-4 border-green-500 w-96 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-bold text-white mb-1">{chumu.degree}</h3>
                            <h1 className="text-sm text-gray-100 mb-2 italic">{chumu.institution} / {chumu.duration}</h1>
                            <h1 className="text-gray-200 text-sm leading-relaxed">
                                {chumu.description}
                            </h1>
                        </div>


                    ))}



                </div>

            </div>



                <div className='flex flex-col container py-14 mx-auto justify-start items-center'>

                    <div className='text-[#2196F3] opacity-70'><Title voda="Experience"></Title></div>

                    <div className='flex pt-6 flex-col '>



                        {gudu.map((chumu) => (



                            <div key={chumu.id} className="bg-gradient-to-br from-gray-800 to-[#76929E] border-l-4 border-green-500 w-96 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                                <h3 className="text-xl font-bold text-white mb-1">{chumu.title}</h3>
                                <p className="text-sm text-gray-100 mb-2 italic">{chumu.company} / {chumu.duration}</p>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {chumu.description}
                                </p>
                            </div>


                        ))}



                    </div>

                </div></div>



            <div className='flex flex-col py-10 container mx-auto justify-center items-center gap-8'>
                <div className='text-[#6B3FB9]'>

                    <Title2 gud="My level of knowledge in some tools" voda="My Skills"></Title2>




                </div>




                <div className='grid  grid-cols-2'>

                    {fazila.map((chumu) => (


                        <div key={chumu.id} className="max-w-4xl translate-x-35 w-full">


                            <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <div className="flex gap-32 justify-between mb-1">
                                        <span className="font-medium">{chumu.name}</span>
                                        <span className="text-green-400 font-medium">{chumu.level}%</span>
                                    </div>
                                    <div className="bg-gray-700 my-8 rounded-full h-3 overflow-hidden">
                                        <div className="fill-bar bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out" data-percentage="95"></div>
                                    </div>
                                </div>


                            </section>
                        </div>



                    ))}












                </div>


            </div>



            <div className="flex justify-center items-center gap-20 py-6 container mx-auto ">

                <div className='flex flex-col gap-6 w-116'>


                    <div><p key={motapasa.id} className='text-4xl'>{motapasa.title}</p></div>


                    <div>
                        {motapasa.description.map((chumu) => (




                            <div key={chumu}>


                                <p>{chumu}</p>


                            </div>




                        ))}
                    </div>





                </div>


                <div>


                    <main style={{ padding: 20, textAlign: "center" }}>


                        {/* YouTube embed */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/3t2WkCudwfY"
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                            style={{ marginTop: 20 }}
                        ></iframe>

                    </main>

                </div>


            </div>






        </div>
    );
};

export default CertResume;