


"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleText } from '../../Redux/counter/heroTextSlice';
import { toggleLanguage } from '../../Redux/counter/langugeSlice';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const Hero = () => {
    const dispatch = useDispatch();
    const { texts, index } = useSelector((state) => state.heroText);
    const [visible, setVisible] = useState(true);
    const currentLanguage = useSelector((state) => state.language.current);




    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false); // fade out
            setTimeout(() => {
                dispatch(toggleText());
                setVisible(true); // fade in with new text
            }, 500); // delay before switching
        }, 3000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/adobestock_290833398_72dpi.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Moynul Islam</h1>
                        <p
                            className={`mb-5 text-3xl animate-bounce font-semibold transition-opacity duration-500 ${visible ? 'opacity-100 typewriter' : 'opacity-0'
                                }`}
                        >
                            {texts[index]}
                        </p>

                    </div>
                </div>
            </div>


            <div className="fixed bottom-4 left-4 right-4 flex justify-between items-center fade-in">
                {/* Social Icons */}
                <div className="flex gap-4">
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

                {/* Language Switcher */}
                <button
                    onClick={() => dispatch(toggleLanguage())}
                    className="text-white border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                >
                    {currentLanguage}
                </button>
            </div>



        </div>
    );
};

export default Hero;
