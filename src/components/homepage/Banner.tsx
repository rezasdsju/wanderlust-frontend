import BannerImage from '../../../public/images/Banner.png'
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
    return (
        <div >
            <div>
                <Image src={BannerImage} alt='Banner' className='w-full max-h-130 min-h-100 '></Image>
            </div>
<div className=' absolute inset-0 flex flex-col items-center justify-center space-y-3 px-2'>
    <h2 className='text-3xl text-white font-bold text-center'>Discover your <br /> Next Adventures</h2>
    <p className='text-white text-center'>Explore breathtaking destinations and create unforgettable memories with <br /> our curated travel experiences.</p>
    <div className='flex item justify-center gap-2'>
        <button className='flex items-center gap-2 bg-blue-500 px-2 py-2 text-white'>
            <span>EXPLORE NOW</span>
            <span><BsArrowRight /></span>
        </button>
        <button className='bg-[#a5a5a7] px-2 py-2 text-white'>VIEW DESTINATION</button>
    </div>
</div>
            <div className='min-[480px]:grid min-[480px]:grid-cols-5 gap-0 bg-[#6C696D] '>
                <div className='col-span-4 grid grid-cols-2 min-[480px]:grid-cols-4'>
                    <div className='flex flex-col border-r border-white pl-2 min-[480px]:pl-3 py-1 border-b '>
                        <span className='text-white font-semibold'>Location</span>
                        <span className='text-white text-xs '>Address, City or Zip</span>
                    </div>
                    <div className='flex flex-col border-r border-white min-[480px]:pl-3 pl-2 py-1 border-b'>
                        <span className='text-white font-semibold'>Date/Duration</span>
                        <span className='text-white text-xs '>Anytime/3 Days</span>
                    </div>
                    <div className='flex flex-col border-r border-white min-[480px]:pl-3 pl-2 py-1 '>
                        <span className='text-white font-semibold'>Budget</span>
                        <span className='text-white text-xs '>$0-$3000</span>
                    </div>
                    <div className='flex flex-col border-r border-white min-[480px]:pl-3 pl-2 py-1'>
                        <span className='text-white font-semibold'>People</span>
                        <span className='text-white text-xs '>5-10</span>
                    </div>
                </div>



                <div className='bg-blue-400 flex items-center justify-center col-span-1'>
                    <span className='flex items-center justify-center text-white'>Search</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;