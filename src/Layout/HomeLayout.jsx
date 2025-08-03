import React from 'react';
import Navber from '../Components/Navber';
import HeroSection from '../Home/HeroSection';
import QualityFeatures from '../Home/QualityFeatures';

const HomeLayout = () => {
    return (
        <div>
            <div className='bg-[#F6F8FB]'>
                <Navber />
                <HeroSection />
            </div>
            <QualityFeatures />
        </div>
    );
};

export default HomeLayout;