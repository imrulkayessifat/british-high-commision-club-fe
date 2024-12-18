/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoMdSunny } from "react-icons/io";

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"


const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-[76px] px-5 bg-[#F6F6F8FF]'>
            <div className='flex items-center gap-1'>
                <img src="/sun-horizon.png" alt="Sun Horizon" className='w-6 h-6' />
                <span className='font-normal font-lexend text-[14px] leading-[22px] text-[#104263FF]'>Good Afternoon</span>
                <IoMdSunny className='text-amber-400 w-4 h-4' />
            </div>
            <div className='inline-flex items-center gap-1'>
                <img alt='Notification' src='/notification.png' className='text-[#171A1FFF] w-13 h-8 cursor-pointer' />
                <Avatar className='w-11 h-11 cursor-pointer'>
                    <AvatarImage src="/avatar-1.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar