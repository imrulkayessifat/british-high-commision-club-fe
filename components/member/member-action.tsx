"use client"

import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MemberAction = () => {
    const [sort, setSort] = useState("date-asc")

    const getSortDisplayText = () => {
        switch (sort) {
            case "date-asc": return "Created Date &#8595;";
            case "date-des": return "Created Date &#8593;";
            case "status-asc": return "Status &#8595;";
            case "status-des": return "Status &#8593;";
            case "priority-asc": return "Priority &#8595;";
            case "priority-des": return "Priority &#8593;";
            default: return "Sort";
        }
    }
    return (
        <div className='flex w-full flex-wrap gap-3 justify-between px-5'>
            <div className='flex w-1/2 justify-start flex-col md:flex-row gap-3'>
                <div className="relative flex items-center w-full  min-w-[250px] h-12 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
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
                <Select>
                    <SelectTrigger className="w-full  min-w-[250px] h-12 rounded-lg bg-[#F3F4F6FF] focus:ring-0 focus:ring-offset-0">
                        <SelectValue className='text-gray-300' placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className='text-gray-300'>
                            <SelectLabel>Priority</SelectLabel>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <DropdownMenu>
                <div className='flex gap-3 h-12 min-w-[250px] items-center bg-white border rounded-md px-5 border-[#104263FF] outline-0'>
                    <DropdownMenuTrigger asChild>
                        <IoFilter className='cursor-pointer' />
                    </DropdownMenuTrigger>
                    <span dangerouslySetInnerHTML={{ __html: `Sort: ${getSortDisplayText()}` }} />
                </div>
                <DropdownMenuContent align='end' className="w-full bg-white">
                    <DropdownMenuLabel>Sort</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                        <DropdownMenuRadioItem value="date-asc">Creaded Date &#8595;</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="date-des">Creaded Date &#8593;</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="status-asc">Status &#8595;</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="status-des">Status &#8593;</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="priority-asc">Priority &#8595;</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="priority-des">Priority &#8593;</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MemberAction