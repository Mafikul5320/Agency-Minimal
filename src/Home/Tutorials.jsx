import { FaRegCommentDots } from 'react-icons/fa';
import course1 from '../assets/course 1.png';
import course2 from '../assets/course 2.png';
import course3 from '../assets/course 3.png';
import Rectangle1 from '../assets/Rectangle 543.png';
import Rectangle2 from '../assets/Rectangle 544.png';
import Rectangle3 from '../assets/Rectangle 545.png';
import image from '../assets/Group 48.png';

const Tutorials = () => {
    return (
        <div className='bg-[#F8FAFC] py-9 pb-48 my-24 relative'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-center py-3 font-semibold text-[#8D448B] text-xl'>Quality features</h1>
                <h1 className='text-center font-semibold text-[30px] pb-20'>Tutorials that people love most</h1>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='bg-white rounded-xl border border-gray-100 '>
                        <img src={course1} />
                        <h1 className='p-5 text-xl font-semibold'>How to work with prototype design with adobe xd featuring tools</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium text-[16px]'><FaRegCommentDots size={22} /> <span>22 Comments</span></p>
                    </div>
                    <div className='bg-white rounded-xl shadow-xs'>
                        <img src={course2} />
                        <h1 className='p-5 text-xl font-semibold'>Create multiple artboard by using figma prototyping development</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium text-[16px]'><FaRegCommentDots size={22} /> <span>15 Comments</span></p>
                    </div>
                    <div className='bg-white rounded-xl border border-gray-100'>
                        <img src={course3} />
                        <h1 className='p-5 text-xl font-semibold'>Convert your web layout theming easily with sketch zeplin extension</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium text-[16px]'><FaRegCommentDots size={22} /> <span>18 Comments</span></p>
                    </div>
                </div>
            </div>
            <div className='bg-[#8D448B] max-w-7xl mx-auto p-9 text-white flex justify-between items-center mb-19 rounded-xl absolute -bottom-41 right-78 w-full'>
                <h1 className='text-4xl font-medium leading-13'>Hire the world’s best developers <br /> and designers around!</h1>
                <img src={image} />
                <div className='relative'>
                    <img className='absolute -top-7 left-17 opacity-65' src={Rectangle1} />
                    <img className='absolute -top-9 left-27 opacity-65' src={Rectangle2} />
                    <img className='absolute -top-7 left-33 opacity-65' src={Rectangle3} />
                    <button className='bg-white text-[#8D448B] font-semibold px-9 py-4 rounded-sm text-[17px]'>HIRE DEVELOPERS</button>
                    <img className='absolute -bottom-7 left-18 opacity-65' src={Rectangle3} />
                    <img className='absolute -bottom-9 left-28 opacity-65' src={Rectangle2} />
                    <img className='absolute -bottom-7 left-34 opacity-65' src={Rectangle1} />

                </div>
            </div>
        </div>
    );
};

export default Tutorials;