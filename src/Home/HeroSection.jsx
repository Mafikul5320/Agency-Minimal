import React from 'react';
import Hero from '../assets/Hero.png'
import Paypal from '../assets/paypal.png'
import Google from '../assets/google.png'
import DropBox from '../assets/Dropbox_logo_2017.png'

const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-between my-16 '>

            {/* left */}
            <div>
                <h1 className='text-5xl font-semibold leading-15 text-[#02073E]'>Great software is <br /> built with amazing <br /> developers</h1>
                <p className='py-6 leading-8  text-[#02073E]'>We help build and manage a team of world-class <br /> developers to bring your vision to life</p>
                <input className='bg-white w-[370px] py-3 px-5 rounded-[8px]' placeholder='Subscribe newsletter' type="text" />
                <button className='bg-[#8D448B] text-white py-3 ml-2 rounded-[4px] px-7'>Subscribe</button>
                <div className='flex items-center space-x-9 my-13'>
                    <h1>Sponsored by:</h1>
                    <img src={Paypal} alt="Paypal" />
                    <img src={Google} alt="Google" />
                    <img src={DropBox} alt="Dropbox" />
                </div>
            </div>

            {/* Right */}
            <div className='h-140 w-140'>
                <img src={Hero}  />
            </div>
        </div>
    );
};

export default HeroSection;