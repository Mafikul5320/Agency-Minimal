import React from 'react';
import Navber from '../Components/Navber';
import HeroSection from '../Home/HeroSection';
import QualityFeatures from '../Home/QualityFeatures';
import LeadingCompanies from '../Home/LeadingCompanies';

const HomeLayout = () => {
    return (
        <div>
            <div className='bg-[#F6F8FB]'>
                <Navber />
                <HeroSection />
            </div>
            <QualityFeatures />
            <LeadingCompanies />
        </div>
    );
};

export default HomeLayout;