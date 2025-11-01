



import React from 'react';
import { MdDirtyLens } from "react-icons/md";
import { IoMdRainy } from "react-icons/io";
import { BsFillRocketFill } from "react-icons/bs";
import Link from 'next/link';
const ProAbout = async () => {

    const dhon = await fetch("http://localhost:4004/plans")

    const mon = await dhon.json()

    const iconMap = {


        MdDirtyLens: <MdDirtyLens />,
        WiRaindrop: <IoMdRainy />,

        BsFillRocketFill: <BsFillRocketFill />,

    }


    return (
        <div>
            <div className='flex flex-wrap container justify-start pb-12 gap-8 mx-auto'>

                {mon.planss.map((chumu) => (


                    <div key={chumu.id}>

                        <div className="card w-96 bg-[#161616] shadow-sm">
                            <div className="flex flex-col justify-start items-center text-center my-6">
                                <span className="text-[37px] text-green-600 pb-4">{iconMap[chumu.image]}</span>
                                <div className="flex flex-col gap-4 justify-between">
                                    <h2 className="text-3xl font-bold">{chumu.name}</h2>
                                    <span className="text-xl">{chumu.price}</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className='flex flex-col gap-6 text-[14px] text-gray-400'>

                                        {chumu.features.map((nunu) =>
                                            <h1 key={nunu}>{nunu}</h1>
                                        )}
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <li> <Link href={`/about/${chumu.id}`}><button className="btn btn-warning text-white bg-green-800 ">{chumu.button}</button></Link></li>
                                </div>
                            </div>
                        </div>



                    </div>




                ))}







            </div>
        </div>
    );
};

export default ProAbout;