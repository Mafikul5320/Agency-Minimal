import { ChevronRight } from 'lucide-react';
import videoImage from '../assets/video.png';
import user2 from '../assets/Ellipse 6 (1).png';
import user3 from '../assets/Ellipse 6 (2).png';
import user1 from '../assets/Ellipse 6.png';

const LeadingCompanies = () => {
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <h1 className='text-center text-5xl font-semibold leading-normal'>Leading companies trust us <br /> to develop software</h1>
            <p className='text-center pt-6 leading-8 text-[#343D48] text-[17px]'>We believe it’s important for everyone to have access to software <br /> especially when it comes to digital learning be navigate.</p>
            <h1 className='flex items-center mt-6 text-[#8D448B] font-semibold justify-center mb-6'>Explore Details <ChevronRight className='pt-1' size={19} /></h1>
            <div className='flex justify-center'>
                <img src={videoImage} />
            </div>

            {/* Customer Comments */}

            <div className='mt-22'>
                <h1 className='text-[#8D448B] text-center pb-2 font-medium text-[18px]'>Customer Comments</h1>
                <h1 className='font-semibold text-center text-[30px]'>Why customers love us</h1>
                <p id='playfair-display' className='text-center text-[36px] text-[#0F2137] py-11'>They are doing amazing job with hundred percent <br /> customer satisfaction, Love their work and would <br /> like to work with them again</p>

                <div className='flex items-center space-x-36 justify-center my-20'>
                    <div className='border-t-3 border-[#8D448B] pt-5 flex items-center'>
                        <img src={user1} />
                        <div className='pl-3'>
                            <h1 className='font-semibold text-[18px]'>Pierre Hackett</h1>
                            <p className='text-gray-500 text-sm text-[15px]'>VP of Engineering</p>
                        </div>
                    </div>

                    <div className='pt-5 flex items-center'>
                        <img src={user2} />
                        <div className='pl-3'>
                            <h1 className='font-semibold text-[18px]'>Natalia Sanz</h1>
                            <p className='text-gray-500 text-sm text-[15px]'>Head of Technology</p>
                        </div>
                    </div>

                    <div className='pt-5 flex items-center'>
                        <img src={user3} />
                        <div className='pl-3'>
                            <h1 className='font-semibold text-[18px]'>Ece Akman</h1>
                            <p className='text-gray-500 text-sm text-[15px]'>Senior Marketer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LeadingCompanies;