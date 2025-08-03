import React, { useState } from 'react';
import logo from '../assets/Group.png';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto  md:py-3 flex items-center justify-between relative p-3 md:p-0">
      {/* Left Side */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Builderz" className="w-8 h-8" />
        <h1 id="Builderz" className="text-xl text-[#02073E]">Builderz</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Middle Navigation (Desktop) */}
      <div className="hidden lg:flex space-x-9 items-center text-[#02073E] font-medium">
        <button>Home</button>
        <button className="flex items-center">
          Adversite <FaCaretDown size={16} className="ml-1" />
        </button>
        <button className="flex items-center">
          Supports <FaCaretDown size={16} className="ml-1" />
        </button>
        <button>Contact</button>
        <button>About us</button>
      </div>

      {/* Right Side (Desktop) */}
      <div className="hidden lg:block">
        <button className="border-2 border-[#8D448B] text-[#8D448B] font-semibold rounded-[5px] py-2.5 px-5">
          Register Now
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 p-4 z-50 lg:hidden">
          <div className="flex flex-col space-y-3 text-[#02073E] font-medium">
            <button>Home</button>
            <button className="flex items-center">
              Adversite <FaCaretDown size={16} className="ml-1" />
            </button>
            <button className="flex items-center">
              Supports <FaCaretDown size={16} className="ml-1" />
            </button>
            <button>Contact</button>
            <button>About us</button>
            <button className="mt-2 border-2 border-[#8D448B] text-[#8D448B] font-semibold rounded-[5px] py-2 px-4 w-full">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
