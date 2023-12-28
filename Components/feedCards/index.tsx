import React from 'react'
import Image from 'next/image';
import { FiMessageCircle } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoTrendingUpSharp } from "react-icons/io5";
import Link from "next/link";

 const FeedCard: React.FC =() => {
    return ( 
    <div className='border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-1'>
                <Image 
                src="https://avatars.githubusercontent.com/u/124354779?s=96&v=4"
                alt="users-image"
                height={40}
                width={40}
                className='rounded-full' />
            </div>
            <div className='col-span-11'>
                <h5>Atul</h5>
                <p>Feel free to choose the level of rounding that best fits your design preferences. You can explore the various rounded-* utility classes in the Tailwind CSS documentation for more options</p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[80%]'>
                <div>
                <FiMessageCircle />
                </div>
                <div>
                <BiRepost />
                </div>
                <div>
                <CiHeart />
                </div>
                <div>
                <IoTrendingUpSharp />
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};
export default FeedCard;