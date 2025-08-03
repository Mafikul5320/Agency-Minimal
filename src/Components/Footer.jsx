import Group from '../assets/Group.png';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto justify-between flex pt-10 pb-7'>
            <div className='flex items-center space-x-3'>
                <img src={Group} />
                <h1 className='text-gray-400 text-[14px]'>Copyright by 2019 Dev, Inc</h1>
            </div>

            <div className='flex items-center space-x-3'>
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