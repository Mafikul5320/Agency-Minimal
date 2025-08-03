import React from 'react';
import victory from '../assets/Vector.png'
import artdesign from '../assets/art-and-design 1.png'
import Editing from '../assets/L0001.png'
import shape from '../assets/Shape 1.png'
import sutter from '../assets/img.png'
import right from '../assets/right.png'
import { ChevronRight } from 'lucide-react';

const QualityFeatures = () => {
    return (
        <div className='max-w-7xl mx-auto p-4 md:p-0'>
            <h1 className='text-[#8D448B]  text-center text-[18px] font-semibold'>Quality features</h1>
            <h1 className='text-[#0F2137] text-center text-[30px] font-semibold'>Meet exciting feature of app</h1>
            <div className='grid md:grid-cols-4 p-4 md:p-0 md:gap-5 md:my-14'>
                <div className='md:my-14 my-6'>
                    <img className='bg-gradient-to-tl from-[#FFCC40] to-[#FFCC4080] h-27 w-27  p-8 mx-auto rounded-4xl object-cover' src={artdesign} alt="Art" />
                    <h1 className='text-center text-[18px] text-[#0F2137] font-semibold py-4'>Unlimited Customization</h1>
                    <p className='text-center leading-relaxed text-[15px]'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='md:my-14 my-6'>
                    <img className='bg-gradient-to-tl from-[#25D9D9] to-[#25D9D980] h-27 w-27  p-8 mx-auto rounded-4xl ' src={shape} alt="Art" />
                    <h1 className='text-center text-[18px] text-[#0F2137] font-semibold py-4'>Vector shape & resizable</h1>
                    <p className='text-center leading-relaxed text-[15px]'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='md:my-14 my-6'>
                    <img className='bg-gradient-to-tl from-[#0898E7] to-[#0898E780] h-27 w-27  p-8 mx-auto rounded-4xl object-cover' src={Editing} alt="Art" />
                    <h1 className='text-center text-[18px] text-[#0F2137] font-semibold py-4'>Editing freedom</h1>
                    <p className='text-center leading-relaxed text-[15px]'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='md:my-14 my-6'>
                    <img className='bg-gradient-to-tl from-[#FF9066] to-[#FF906680] h-27 w-27  p-8 mx-auto rounded-4xl object-cover' src={victory} alt="Art" />
                    <h1 className='text-center text-[18px] text-[#0F2137] font-semibold py-4'>Best Award history</h1>
                    <p className='text-center leading-relaxed text-[15px]'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row items-center justify-between md:my-16'>
                {/* image */}
                <div>
                    <img src={sutter} />
                </div>

                {/* content */}
                <div >
                    <h1 className='md:text-5xl text-3xl text-center md:text-left text-[#0F2137] font-semibold md:leading-15'>Boost your agencies <br /> by choosing Ninja <br /> Developers</h1>
                    <p className='pt-5 pb-7 text-[#02073E]/70 text-[17px] leading-relaxed'>Create custom landing pages with Shades that convert <br /> more visitors than any website, no coding required.</p>
                    <div className='flex items-center space-x-3 mb-2'>
                        <img src={right} />
                        <h1 className='text-[#02073E] text-[18px]'>Unlimited design possibility</h1>
                    </div>
                    <div className='flex items-center space-x-3 mb-2'>
                        <img src={right} />
                        <h1 className='text-[#02073E] text-[18px]'>Completely responsive features</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <img src={right} />
                        <h1 className='text-[#02073E] text-[18px]'>Easy to customize plugins</h1>
                    </div>
                    <h1 className='flex items-center pl-8 mt-6 text-[#8D448B] font-semibold'>Learn more <ChevronRight className='pt-1' size={19} /></h1>
                </div>
            </div>
        </div>
    );
};

export default QualityFeatures;