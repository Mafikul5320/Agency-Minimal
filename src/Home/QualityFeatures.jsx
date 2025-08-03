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
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-[#8D448B] text-center text-[18px] font-medium'>Quality features</h1>
            <h1 className='text-[#0F2137] text-center text-[30px] font-semibold'>Meet exciting feature of app</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='my-14'>
                    <img className='bg-gradient-to-tl from-[#FFCC40] to-[#FFCC4080] h-20 w-20  p-5 mx-auto rounded-4xl object-cover' src={artdesign} alt="Art" />
                    <h1 className='text-center text-[#0F2137] font-semibold py-4'>Unlimited Customization</h1>
                    <p className='text-center leading-relaxed text-sm'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='my-14'>
                    <img className='bg-gradient-to-tl from-[#25D9D9] to-[#25D9D980]/50 h-20 w-20  p-5 mx-auto rounded-4xl ' src={shape} alt="Art" />
                    <h1 className='text-center text-[#0F2137] font-semibold py-4'>Vector shape & resizable</h1>
                    <p className='text-center leading-relaxed text-sm'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='my-14'>
                    <img className='bg-gradient-to-tl from-[#0898E7] to-[#0898E780] h-20 w-20  p-5 mx-auto rounded-4xl object-cover' src={Editing} alt="Art" />
                    <h1 className='text-center text-[#0F2137] font-semibold py-4'>Editing freedom</h1>
                    <p className='text-center leading-relaxed text-sm'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='my-14'>
                    <img className='bg-gradient-to-tl from-[#FF9066] to-[#FF906680] h-20 w-20  p-5 mx-auto rounded-4xl object-cover' src={victory} alt="Art" />
                    <h1 className='text-center text-[#0F2137] font-semibold py-4'>Best Award history</h1>
                    <p className='text-center leading-relaxed text-sm'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                {/* image */}
                <div>
                    <img className='' src={sutter} />
                </div>

                {/* content */}
                <div>
                    <h1 className='text-5xl text-[#0F2137] font-semibold leading-15'>Boost your agencies <br /> by choosing Ninja <br /> Developers</h1>
                    <p className='pt-5 pb-7 text-[#02073E] leading-relaxed'>Create custom landing pages with Shades that convert <br /> more visitors than any website, no coding required.</p>
                    <div className='flex items-center space-x-3 mb-2'>
                        <img src={right} />
                        <h1 className='text-[#02073E]'>Unlimited design possibility</h1>
                    </div>
                    <div className='flex items-center space-x-3 mb-2'>
                        <img src={right} />
                        <h1 className='text-[#02073E]'>Completely responsive features</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <img src={right} />
                        <h1 className='text-[#02073E]'>Easy to customize plugins</h1>
                    </div>
                    <h1 className='flex items-center pl-8 mt-6 text-[#8D448B] font-medium'>Learn more <ChevronRight className='pt-1' size={19} /></h1>
                </div>
            </div>
        </div>
    );
};

export default QualityFeatures;