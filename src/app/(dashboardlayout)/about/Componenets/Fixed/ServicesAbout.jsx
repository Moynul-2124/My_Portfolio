


import React from 'react';

const ServicesAbout = async () => {

    const dhon = await fetch("http://localhost:4004/services")

    const mon = await dhon.json()




    return (
        <div>
            <div className='flex flex-wrap justify-start container mx-auto gap-12'>


                {mon.map((chumu) => (



                    <div key={chumu.id}>



                        <div className="card bg-base-300 w-76 shadow-sm">
                            <div className='flex flex-col justify-start items-start'>

                                <figure className="px-10 pt-10">
                                    <img className='rounded-full ' width={58} src={chumu.icon} alt="Logo" />
                                </figure>
                                <div className="card-body flex flex-col justify-start text-start">
                                    <h2 className="card-title  font-bold text-gray-300 tracking-wide text-[20px]">{chumu.name}</h2>
                                    <p className='tracking-wide'>{chumu.description}</p>

                                </div>


                            </div>
                        </div>



                    </div>




                ))}




            </div>
        </div>
    );
};

export default ServicesAbout;