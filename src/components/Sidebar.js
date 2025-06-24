import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { RiVideoLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


const Sidebar = () => {
  const isMenuOpen=useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div >
    <div className='bg-[#0f0f0f] px-4 absolute h-screen'>
        <ul>
            <li ><Link to='/'><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><IoMdHome className='scale-150'/>Home</button></Link></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><SiYoutubeshorts className='scale-150'/>Shots</button></li>
            <li ><button className='py-2.5 mb-3 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><MdSubscriptions className='scale-150'/>Subscription</button></li>
        </ul>
        <hr/> 
        <ul>
            <li className='py-[22px] px-3 flex w-[180px] gap-2 items-center'>You {">"}</li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><LuHistory className='scale-150'/>History</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><CgPlayList className='scale-150'/>Playlists</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><RiVideoLine className='scale-150'/>Your videos</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><MdSubscriptions className='scale-150'/>Subscription</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><SiYoutubeshorts className='scale-150'/>Shots</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><MdSubscriptions className='scale-150'/>Subscription</button></li>
            <li ><button className='py-2.5 px-3 w-[180px] flex gap-7 items-center focus:bg-[#2d2d2d] hover:bg-[#2d2d2d] rounded-lg '><SiYoutubeshorts className='scale-150'/>Shots</button></li>
        </ul>
    </div>
    <div class="absolute top-0 left-[35vh] w-[174vh] h-[115.5%] bg-[#00000071]"></div>
    </div>
  )
}

export default Sidebar;