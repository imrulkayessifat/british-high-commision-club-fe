"use client"

import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

import { manualCheckInSheet } from '@/components/hooks/manual-checkin-sheet';
import { memberCheckInSheet } from '../hooks/member-checkin-sheet';
import TodayCheckInList from '@/components/check-in/today-check-in-list';

const TodayCheckIn = () => {
    const { onOpen } = manualCheckInSheet()
    const { onOpen: memberOnOpen } = memberCheckInSheet();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex justify-between gap-2 flex-wrap items-center'>
                <div className="relative flex items-center   h-12 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search...(ID, Name)"
                    />
                </div>
                <div className='flex flex-wrap gap-3'>
                    <button onClick={memberOnOpen} className='flex min-w-[180px] h-12 text-white items-center gap-2 p-2 rounded-md bg-[#104263FF]'>
                        <FaRegUser />
                        <p>Member&apos;s Check-in</p>
                    </button>
                    <button onClick={onOpen} className='flex min-w-[180px] h-12 text-white items-center gap-2 p-2 rounded-md bg-[#104263FF]'>
                        <IoMdAddCircleOutline />
                        <p>Manual Check-in</p>
                    </button>
                </div>
            </div>
            <p>Today&apos;s Total Check-in count : <span className='text-[#104263FF]'>30</span></p>
            <TodayCheckInList />
        </div>
    )
}

export default TodayCheckIn