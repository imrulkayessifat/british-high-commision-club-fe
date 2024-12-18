"use client";

import { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const CheckInHeader = () => {
    const [sort, setSort] = useState("priority-asc")

    const getSortDisplayText = () => {
        switch (sort) {
            case "status-asc": return "Status &#8595;";
            case "status-des": return "Status &#8593;";
            case "priority-asc": return "Priority &#8595;";
            case "priority-des": return "Priority &#8593;";
            default: return "Sort";
        }
    }
    return (
        <div className='flex flex-col md:flex-row gap-2 justify-between'>
            <div className='flex gap-1'>
                <div className='w-2 h-8 bg-[#104263FF]'></div>
                <h1 className='font-bold text-2xl leading-9 text-[#104263FF]'>Member & Guest Check-in</h1>
            </div>
            <div className='flex gap-3'>
                <DropdownMenu>
                    <div className='flex gap-3 h-12  items-center border rounded-md px-5 border-[#104263FF] outline-0'>
                        <DropdownMenuTrigger asChild>
                            <IoFilter className='cursor-pointer' />
                        </DropdownMenuTrigger>
                        <span dangerouslySetInnerHTML={{ __html: `Sort: ${getSortDisplayText()}` }} />
                    </div>
                    <DropdownMenuContent align='end' className="w-full">
                        <DropdownMenuLabel>Sort</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                            <DropdownMenuRadioItem value="status-asc">Status &#8595;</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="status-des">Status &#8593;</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="priority-asc">Priority &#8595;</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="priority-des">Priority &#8593;</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <button className='flex items-center gap-2 text-white px-3 bg-[#104263FF] rounded-[6px]'>
                    <FaCloudDownloadAlt className='h-4 w-4' />
                    <span>Export</span>
                </button>
            </div>
        </div>
    )
}

export default CheckInHeader