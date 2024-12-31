"use client";

import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'

import { createEventDialog } from '@/components/hooks/create-event-dialog';

const EventHeader = () => {
    
    const { onOpen } = createEventDialog()
    return (
        <div className='flex justify-between py-6 px-12 border-b border-neutral-300'>
            <div className='flex gap-1'>
                <div className='w-2 h-8 bg-[#104263FF]'></div>
                <h1 className='font-bold text-2xl leading-9 text-[#104263FF]'>Events List</h1>
            </div>
            <button onClick={onOpen} className='flex items-center px-4 gap-2 h-9 w-[155px] rounded-[6px] text-white border bg-[#104263FF] border-[#104263FF]'>
                <FaCirclePlus />
                <span>Create Event</span>
            </button>
            
        </div>
    )
}

export default EventHeader