import React from 'react';
import Navber from '../Components/Navber';
import HeroSection from '../Home/HeroSection';
import QualityFeatures from '../Home/QualityFeatures';
import LeadingCompanies from '../Home/LeadingCompanies';
import CustomerSupport from '../Home/CustomerSupport';
import Tutorials from '../Home/Tutorials';
import Footer from '../Components/Footer';

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
            <Footer />
        </div>
    );
};

export default HomeLayout;