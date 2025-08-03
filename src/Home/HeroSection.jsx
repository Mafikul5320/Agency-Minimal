import React from 'react';
import Hero from '../assets/Hero.png'
import Paypal from '../assets/paypal.png'
import Google from '../assets/google.png'
import DropBox from '../assets/Dropbox_logo_2017.png'

const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row px-3 md:px-0 items-center justify-between my-16 '>

            {/* left */}
            <div>
                <h1 className='md:text-[64px] text-5xl text-center md:text-left font-semibold md:leading-19 leading-15 text-[#02073E]'>Great software is <br /> built with amazing <br /> developers</h1>
                <p className='py-6 leading-8 text-center md:text-left  md:text-[18px] text-[#02073E]'>We help build and manage a team of world-class <br /> developers to bring your vision to life</p>
                <input className='bg-white w-[370px] h-[65px] py-6 px-5 rounded-[8px]' placeholder='Subscribe newsletter' type="text" />
                <button className='bg-[#8D448B] text-white py-5 mt-3 nd:mt-0 md:ml-4 rounded-[4px] px-12 font-semibold'>Subscribe</button>
                <div className='flex flex-wrap items-center justify-center lg:justify-start space-x-4 sm:space-x-9 mt-8'>
                    <h1>Sponsored by:</h1>
                    <img src={Paypal} alt="Paypal" />
                    <img src={Google} alt="Google" />
                    <img src={DropBox} alt="Dropbox" />
                </div>
            </div>

            {/* Right */}
            <div className='md:h-150 md:w-150 w-95'>
                <img src={Hero}  />
            </div>
        </div>
    );
};

export default HeroSection;