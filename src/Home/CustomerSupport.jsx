import { ChevronRight } from 'lucide-react';
import support from '../assets/customer_support.png';

const CustomerSupport = () => {
    return (
        <div className='max-w-7xl mx-auto flex md:flex-row flex-col-reverse items-center justify-between my-9'>
            <div className='p-3 md:p-0'>
                <h1 className='md:text-[48px] font-bold text-[#0F2137] md:leading-14 text-center md:text-left text-2xl py-5 md:py-0'>Free Customer Support <br /> to ensure what you like <br /> to expect</h1>
                <p className='py-6 text-gray-700 text-[17px] leading-8'>We offer a risk-free trial period of up to two weeks. You will only <br /> have to pay if you are happy with the developer and wish to <br /> continue. If you are unsatisfied, we’ll refund payment or fix <br /> issues on our dime period customers.
                </p>
                <p className='text-[#02073E]/60'>If you are happy with the developer and wish to continue. If you <br /> are unsatisfied, we’ll refund payment or fix issues.</p>
                <h1 className='flex items-center mt-6 text-[#8D448B] font-medium mb-6'>Learn more <ChevronRight className='pt-1' size={19} /></h1>
            </div>
            <div>
                <img src={support} />
            </div>
        </div>
    );
};

export default CustomerSupport;