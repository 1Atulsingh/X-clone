import Image from 'next/image'

import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from '@/Components/feedCards';
import { title } from 'process';



interface TwitterSidebarbutton{
  title:string;
  icon: React.ReactNode;
}

const sidebarbutton:TwitterSidebarbutton[]=[
  {
    title :"Home",
    icon : <GoHome />
  },
  {
    title :"Explore",
    icon : <IoMdSearch />
  },
  {
    title :"Notifications",
    icon : <IoIosNotificationsOutline />
  },
  {
    title :"message",
    icon : <BsEnvelopeAtFill />
  },{
    title :"Bookmarks",
    icon : <CiBookmark />
  },
  {
    title :"X-blue",
    icon : <RiVerifiedBadgeFill />
  },
  {
    title :"profile",
    icon : <CgProfile />
  },{
    title :"more",
    icon : <CiCircleMore />
  },
]

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3 pt-2  px-4'>
      <div className='text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all'>
      <BsTwitterX />
      </div>
      <div className='mt-0 text-1xl font-semibold'>
        <ul>
          {sidebarbutton.map(item =>
          <li className='flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-2 py-4 w-fit cursor-pointer '
          key={item.title}>
          <span>{item.icon}</span>
          <span>{item.title}</span></li>
          )}
        </ul>
        <button className='bg-[#1d9bf0] p-1.5 rounded-full w-full mt-4 '>Tweet</button>
      </div>
      </div>
      <div className='col-span-6 border-r-[1px] border-l-[1px]  border-gray-600'>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
