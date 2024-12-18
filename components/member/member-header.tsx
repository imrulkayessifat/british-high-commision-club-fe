"use client";

import React from 'react'
import { BiSolidFileExport } from 'react-icons/bi'
import { RiImportFill } from 'react-icons/ri'

import { addMemberSheet } from '@/components/hooks/add-member-sheet';
import { FaCirclePlus } from 'react-icons/fa6';

const MemberHeader = () => {
    const { onOpen } = addMemberSheet()
    return (
        <div className='flex flex-col md:flex-row flex-grow md:items-center gap-2 justify-between'>
            <div className='flex gap-1'>
                <div className='w-2 h-8 bg-[#104263FF]'></div>
                <h1 className='font-bold text-2xl leading-9 text-[#104263FF]'>Member List</h1>
            </div>
            <div className='flex flex-wrap gap-3'>
                <button className='flex items-center px-4 gap-2 h-9 w-[150px] rounded-[6px] border text-[#104263FF] border-[#104263FF]'>
                    <BiSolidFileExport className='text-[#104263FF]' />
                    <span>Export List</span>
                </button>
                <button className='flex items-center px-4 gap-2 h-9 w-[150px] rounded-[6px] border text-[#104263FF] border-[#104263FF]'>
                    <RiImportFill className='text-[#104263FF]' />
                    <span>Import List</span>
                </button>
                <button onClick={onOpen} className='flex items-center px-4 gap-2 h-9 w-[155px] rounded-[6px] text-white border bg-[#104263FF] border-[#104263FF]'>
                    <FaCirclePlus />
                    <span>Add Member</span>
                </button>
            </div>
        </div>
    )
}

export default MemberHeader