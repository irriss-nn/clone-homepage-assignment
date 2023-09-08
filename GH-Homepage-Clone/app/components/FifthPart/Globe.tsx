'use client';
import React, { useState } from 'react';
import Earth from './RotatingGlobe';

// Define the component's expected props
type Props = {};

const Globe = (props: Props) => {
    // State variables for hover interactions
    const [hovered, setHovered] = useState<boolean>(false);
    const [hovered1, setHovered1] = useState<boolean>(false);

    return (
        //  Main container for the globe component
        <div className='overflow-hidden relative'>

             {/* Heading and description section */}
            <div className='max-w-[1280px] mx-auto relative z-[2]'>
                <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
                    <div className='py-3 mb-2 flex flex-col justify-center items-center'>

                        {/* Main heading */}
                        <h2 className='px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white'>The place for anyone from anywhere to build anything</h2>

                         {/* Description text */}
                        <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s&nbsp;build from&nbsp;here.</p>

                        {/* Call to action buttons with hover interactions */}
                        <div className='lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5'>
                            {/* "Sign up for GitHub" button with hover effect */}
                            <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]'>
                                Sign up for GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"></svg>
                            </a>

                            {/* "Start a free enterprise trail" button with hover effect */}
                            <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className='flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md'>
                                Start a free enterprise trail
                                <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered1 ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Rotating globe visual component */}
            <div className="relative z-[2] max-sm:hidden">
                <Earth />
            </div>

            {/* Background image for the globe */}
            <img className="absolute bottom-0 left-0 w-full h-full object-cover d-block pointer-events-none" width="801" height="807" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg"></img>
            
            {/* Mascot image overlaying the globe background */}
            <div className='flex items-center justify-center relative z-[2] mt-[-200px]'>
                <img alt="Mona looking at the galaxy" width="801" height="807" className="pointer-events-none  w-[400px] object-cover h-[403px]" src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png" />
            </div>
        </div>
    );
}

export default Globe;
