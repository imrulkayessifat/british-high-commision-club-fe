"use client";

import React, { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { MdCheckCircle, MdDelete, MdPeopleAlt, MdAccessTime } from "react-icons/md";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiImportFill } from 'react-icons/ri';

const EventHeader = () => {
    const [date, setDate] = useState<Date>()

    return (
        <div className='flex justify-between py-6 px-12 border-b border-neutral-300'>
            <div className='flex gap-1'>
                <div className='w-2 h-8 bg-[#104263FF]'></div>
                <h1 className='font-bold text-2xl leading-9 text-[#104263FF]'>Events List</h1>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <button className='flex items-center px-4 gap-2 h-9 w-[155px] rounded-[6px] text-white border bg-[#104263FF] border-[#104263FF]'>
                        <FaCirclePlus />
                        <span>Create Event</span>
                    </button>
                </DialogTrigger>

                <DialogContent style={{ background: 'linear-gradient(180deg, #DEE1E6FF 0%, #E4E7DFFF 100%)' }} className='max-w-[70%] max-h-[90%] overflow-y-auto'>
                    <DialogHeader className='flex justify-between w-full border-b-[3px] pb-4 border-[#F6F6F8FF] '>
                        <DialogTitle className='text-[#104263FF]'>
                            Add Event
                        </DialogTitle>
                    </DialogHeader>
                    {/* <Form> */}
                    <p className='leading-[26px] font-bold text-[#104263FF]'>Detail</p>
                    <form className='flex flex-col gap-3'>
                        <div className='flex flex-col md:flex-row gap-5 w-full'>
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Title <span className='text-red-300 text-xs'>*</span></p>
                                <input type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 text-[#104263FF] text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
                                {/* <FormMessage /> */}
                            </div>
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Member <span className='text-red-300 text-xs'>*</span></p>
                                <Select>
                                    <SelectTrigger className="w-full h-9 focus:ring-0 focus:ring-offset-0">
                                        <SelectValue placeholder="Select member" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Member</SelectLabel>
                                            <SelectItem value="MALE">MALE</SelectItem>
                                            <SelectItem value="FEMALE">FEMALE</SelectItem>
                                            <SelectItem value="OTHERS">OTHERS</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {/* <FormMessage /> */}
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex flex-col'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Date <span className='text-red-300 text-xs'>*</span></p>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Total Guest Count <span className='text-red-300 text-xs'>*</span></p>
                                <div className="relative">
                                    <input type="number" min={0} className="w-full min-w-[240px] pl-3 pr-10 py-2 bg-white text-[#104263FF] text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Type here..." />
                                    <MdPeopleAlt className="absolute w-5 h-5 top-2.5 right-2.5 text-[#104263FF]" />
                                </div>
                            </div>
                            {/* <div>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Total Present Guest Count <span className='text-red-300 text-xs'>*</span></p>
                                <div className="relative">
                                    <input type="number" min={0} className="w-full min-w-[240px] pl-3 pr-10 py-2 bg-white text-[#104263FF] text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Type here..." />

                                    <MdPeopleAlt className="absolute w-5 h-5 top-2.5 right-2.5 text-[#104263FF]" />
                                </div>
                            </div> */}
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <div>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Event Start Time <span className='text-red-300 text-xs'>*</span></p>
                                <div className="relative">
                                    <input type="time" className="w-full min-w-[240px] pl-3 pr-10 py-2 bg-white text-[#104263FF] text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [&::-webkit-calendar-picker-indicator]:hidden" placeholder="Type here..." />
                                    <MdAccessTime className="absolute w-5 h-5 top-2.5 right-2.5 text-[#104263FF]" />
                                </div>
                            </div>
                            <div>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Event End Time <span className='text-red-300 text-xs'>*</span></p>
                                <div className="relative">
                                    <input type="time" className="w-full min-w-[240px] pl-3 pr-10 py-2 bg-white text-[#104263FF] text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [&::-webkit-calendar-picker-indicator]:hidden" placeholder="Type here..." />
                                    <MdAccessTime className="absolute w-5 h-5 top-2.5 right-2.5 text-[#104263FF]" />
                                </div>
                            </div>
                            <div>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Event Duration <span className='text-red-300 text-xs'>*</span></p>
                                <div className="relative">
                                    <input type="number" min={0} className="w-full min-w-[240px] pl-3 pr-10 py-2 bg-white text-[#104263FF] text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Type here..." />
                                    <MdAccessTime className="absolute w-5 h-5 top-2.5 right-2.5 text-[#104263FF]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[14px] leading-[22px] font-bold font-inter'>Event Summary <span className='text-red-300 text-xs'>*</span></p>
                            <Textarea className='border-slate-200 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' placeholder="Type your message here." />
                        </div>
                    </form>
                    <div className='rounded-[6px] bg-white'>
                        <div className='flex flex-col gap-2 px-7 py-6'>
                            <div className='flex flex-col justify-between sm:flex-row'>
                                <p className='text-xl leading-[30px] font-bold text-neutral-700'>Guest List</p>
                                <div className='flex gap-2 flex-wrap'>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className={cn('flex min-w-[104px] h-9 text-white items-center justify-center gap-2 p-2 rounded-md bg-[#104263FF]')}>
                                                <IoMdAddCircleOutline />
                                                <p>Add</p>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className='bg-[#F8F9FAFF] p-4 w-[400px]'>
                                            <DialogTitle className='text-[#104263FF]'>
                                                Add Guest
                                            </DialogTitle>
                                            <div className='flex flex-col rounded-[6px] bg-white border border-[#104263FF] px-2 py-1'>
                                                <span className='text-sm font-inter font-bold leading-[22px]'>Guest Name</span>
                                                <input type="text" className='focus:outline-none' />
                                            </div>
                                            <div className='flex flex-col rounded-[6px] bg-white border border-[#104263FF] px-2 py-1'>
                                                <span className='text-sm font-inter font-bold leading-[22px]'>Phone Number</span>
                                                <input type="number" min={0} className='focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                                            </div>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <button className='flex w-[80px] justify-center items-center p-2 text-red-500 border rounded-md h-9 border-red-500'>
                                                        Cancel
                                                    </button>
                                                </DialogClose>
                                                <button className={cn('flex w-[80px] h-9 text-white items-center justify-center gap-2 p-2 rounded-md bg-[#104263FF]')}>
                                                    <IoMdAddCircleOutline />
                                                    <p>Add</p>
                                                </button>
                                            </DialogFooter>
                                        </DialogContent>

                                    </Dialog>
                                    <button className='flex items-center px-4 gap-2 h-9 w-[150px] rounded-[6px] border text-[#104263FF] border-[#104263FF]'>
                                        <RiImportFill className='text-[#104263FF]' />
                                        <span>Import List</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 sm:flex-row'>
                                <div className='flex flex-col gap-1 bg-[#F3F4F6FF] max-w-[183px] h-14 py-1 rounded-md border border-[#104263FF]'>
                                    <span className='text-xs font-inter font-bold leading-[22px] pl-[13px] text-[#104263FF]'>Name</span>
                                    <div className="relative flex items-center    overflow-hidden">
                                        <div className="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm text-gray-700 pr-2"
                                            type="text"
                                            id="search"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 bg-[#F3F4F6FF] w-[196px] h-14 py-1 rounded-md border border-[#104263FF]'>
                                    <span className='text-xs font-inter font-bold leading-[22px] pl-[13px] text-[#104263FF]'>Phone Number</span>
                                    <div className="relative flex items-center    overflow-hidden">
                                        <div className="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm text-gray-700 pr-2"
                                            type="text"
                                            id="search"
                                            placeholder="Enter a Phone Number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-x-auto shadow sm:rounded-lg">
                                <table className="table-auto w-full min-w-max text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                All Guest(4618)
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Phone
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                RFID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>

                                            <th scope="col" className="px-6 py-3">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd:bg-white  even:bg-gray-50  border-b">
                                            <td className="px-6 py-4">
                                                John Hill
                                            </td>

                                            <td className="px-6 py-4">
                                                (717) 817-8593
                                            </td>
                                            <td className="px-6 py-4">
                                                54782356
                                            </td>
                                            <td className="px-6 py-4">
                                                <MdCheckCircle className='w-6 h-6 text-green-500' />
                                            </td>
                                            <td className="px-6 py-4">
                                                <MdDelete className='w-6 h-6 text-red-500' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* </Form> */}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EventHeader