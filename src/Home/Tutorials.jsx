import { FaRegCommentDots } from 'react-icons/fa';
import course1 from '../assets/course 1.png';
import course2 from '../assets/course 2.png';
import course3 from '../assets/course 3.png';

const Tutorials = () => {
    return (
        <div className='bg-[#F8FAFC] py-9 my-24'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-center py-3 font-semibold text-[#8D448B] text-xl'>Quality features</h1>
                <h1 className='text-center font-semibold text-2xl pb-20'>Tutorials that people love most</h1>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='bg-white rounded-xl border border-gray-100 '>
                        <img src={course1} />
                        <h1 className='p-5 text-xl font-semibold'>How to work with prototype design with adobe xd featuring tools</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium'><FaRegCommentDots size={22} /> <span>22 Comments</span></p>
                    </div>
                    <div className='bg-white rounded-xl shadow-xs'>
                        <img src={course2} />
                        <h1 className='p-5 text-xl font-semibold'>Create multiple artboard by using figma prototyping development</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium'><FaRegCommentDots size={22} /> <span>15 Comments</span></p>
                    </div>
                    <div className='bg-white rounded-xl border border-gray-100'>
                        <img src={course3} />
                        <h1 className='p-5 text-xl font-semibold'>Convert your web layout theming easily with sketch zeplin extension</h1>
                        <p className='flex items-center space-x-3 px-5 pb-5 text-gray-500 font-medium'><FaRegCommentDots size={22} /> <span>18 Comments</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;