import React from 'react'
import { FaUser } from "react-icons/fa";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"

const MemberCheckInForm = () => {
    return (
        <div className='flex flex-col  gap-3'>
            <div className="relative inline-flex justify-center w-[250px] items-center h-9 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-[#104263FF]">
                    <FaUser />
                </div>

                <input
                    className="peer h-full outline-none bg-[#F3F4F6FF] text-sm  text-[#104263FF] pr-2"
                    type="text"
                    id="search"
                    placeholder="Member's RFID"
                />
            </div>
            <div className='flex min-w-[400px] justify-between rounded-md p-2 bg-[#DEEFFADE]'>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3'>
                        <Avatar className='w-24 h-24 cursor-pointer'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold text-[#104263FF]'>Elizabeth Watson</p>
                            <span className='text-sm font-normal text-[#104263FF]'>Salesperson</span>
                            <div className='flex gap-2'>
                                <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>High</button>
                                <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>Guest Allowed</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm leading-5 text-[#323842FF]'>ID: BHCC001</p>
                        <p className='text-sm leading-5 text-[#323842FF]'>Phone Number: 01736011747</p>
                        <p className='text-sm leading-5 text-[#323842FF]'>Email: adb@gmail.com</p>
                    </div>
                </div>
                <div className='flex h-full flex-col gap-3 justify-center items-center'>
                    <button className='px-3 py-2 bg-[#1DD75BFF] rounded-[6px] text-sm'>
                        Check-in
                    </button>
                    <button className='px-3 py-2 bg-[#DE3B40FF] rounded-[6px] text-sm text-white'>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MemberCheckInForm