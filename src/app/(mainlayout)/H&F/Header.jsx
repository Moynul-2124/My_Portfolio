



import React from 'react';
import AnimatedLink from '../../(dashboardlayout)/about/Componenets/Shared/AnimatedLink'; // adjust path if needed

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black py-6 shadow-xl">
                <div className="flex items-center flex-1">
                    <img
                        className="rounded-b-sm rounded-t-xl rounded-l-4xl"
                        width={50}
                        height={20}
                        src="https://cdn.worldvectorlogo.com/logos/anzu-wordpress-theme.svg"
                        alt="Theme"
                    />
                    <a className="btn btn-ghost text-xl">InYourOwn</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex gap-8 text-[15px]">
                            <AnimatedLink href="/about">About</AnimatedLink>
                            <AnimatedLink href="/resume">Resume</AnimatedLink>
                            <AnimatedLink href="/portfolio">Portfolio</AnimatedLink>
                            <AnimatedLink href="/blog">Blog</AnimatedLink>
                            <AnimatedLink href="/contact">Contact</AnimatedLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
