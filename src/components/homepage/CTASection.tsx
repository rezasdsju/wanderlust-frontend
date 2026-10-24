
import Image from "next/image";
import CTA from '../../../public/images/CTA.png'
import { BsArrowRight } from "react-icons/bs";

const CTASection = () => {
    return (
        <div className="relative">
            <div>
                <Image src={CTA} alt="CTA" className="w-full min-h-50 max-h-100 sm:max-h-60"></Image>
            </div>


            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Start Your Journey</h2>
                    <p className="text-white text-center">Join thousands of travelers who have discovered the world with us</p>
                    <button className="flex items-center justify-center bg-white px-2 py-2">
                        <span>BOOK YOUR TRIP TODAY</span>
                        <span><BsArrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;