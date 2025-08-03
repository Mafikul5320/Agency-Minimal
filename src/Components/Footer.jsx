import Group from '../assets/Group.png';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-10 pb-7 px-4 gap-4 md:gap-0'>
            <div className='flex items-center space-x-3'>
                <img src={Group} alt="Logo" />
                <h1 className='text-gray-400 text-[14px] text-center md:text-left'>
                    Copyright by 2019 Dev, Inc
                </h1>
            </div>

            <div className='flex justify-center md:justify-end items-center gap-4 text-center md:text-right'>
                <h1>Home</h1>
                <h1>Adversite</h1>
                <h1>Supports</h1>
                <h1>Marketing</h1>
                <h1>FAQ</h1>
            </div>
        </div>
    );
};

export default Footer;
