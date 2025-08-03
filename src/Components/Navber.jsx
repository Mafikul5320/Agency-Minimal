import React from 'react';
import logo from '../assets/Group.png'
import { FaCaretDown } from 'react-icons/fa';

const Navber = () => {
    return (
        <nav className='max-w-7xl mx-auto flex items-center justify-between pt-2 '>

            {/* Left Side */}
            <div className='flex items-center space-x-2'>
                <div>
                    <img src={logo} alt="Builderz" />
                </div>
                <h1 id='Builderz'>Builderz</h1>
            </div>

            {/* Middle point */}
            <div className='space-x-4 flex items-center'>
                <button>Home</button>
                <button className='flex items-center'>Adversite <FaCaretDown size={19} className='pl-.05 pb-1' /></button>
                <button className='flex items-center'>Supports <FaCaretDown  size={19} className='pl-.05 pb-1' /></button>
                <button>Contact</button>
                <button>About us</button>
            </div>

            {/* Right side */}
            <div>
                <button className='border-2 border-[#8D448B] text-[#8D448B] font-semibold rounded-[5px] py-1.5 px-3'>Register Now</button>
            </div>
        </nav>
    );
};

export default Navber;