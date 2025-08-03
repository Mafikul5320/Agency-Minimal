import React from 'react';
import Navber from '../Components/Navber';
import HeroSection from '../Home/HeroSection';
import QualityFeatures from '../Home/QualityFeatures';
import LeadingCompanies from '../Home/LeadingCompanies';
import CustomerSupport from '../Home/CustomerSupport';
import Tutorials from '../Home/Tutorials';

const HomeLayout = () => {
    return (
        <div>
            <div className='bg-[#F6F8FB]'>
                <Navber />
                <HeroSection />
            </div>
            <QualityFeatures />
            <LeadingCompanies />
            <CustomerSupport />
            <Tutorials />
        </div>
    );
};

export default HomeLayout;