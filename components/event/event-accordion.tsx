"use client";

import React, { useState } from 'react'
import { MdModeEdit, MdDelete } from "react-icons/md";


interface EventAccordionProps {
    name: string;
    open: boolean
}

const EventAccordion: React.FC<EventAccordionProps> = ({
    name,
    open
}) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full px-6 py-2 rounded-[6px]" style={{ background: 'linear-gradient(180deg, #F3F4F6 0%, #BCC1CA 100%)' }}>
            <div id="mainHeading" className="flex justify-start gap-2 items-center w-full">
                <button onClick={toggleAccordion} aria-label="toggler" className="" data-menu>
                    <svg
                        className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <div className="">
                    <p className="flex justify-center items-center text-base leading-[26px] font-bold text-[#104263FF]">
                        {name}
                    </p>
                </div>
            </div>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="relative overflow-x-auto shadow sm:rounded-lg mb-4">
                    <table className="table-auto w-full min-w-max text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Member
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Event Summary
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-50  border-b">
                                <td className="px-6 py-4">
                                    Oct 10, 2024
                                </td>

                                <td className="px-6 py-4">
                                    Live Q&A Session Tomorrow!
                                </td>
                                <td className="px-6 py-4">
                                    Elizabeth Watson
                                </td>
                                <td className="px-6 py-4">
                                    Join us for a live Q&A on October 11th to discuss module 3
                                </td>
                                <td className="px-6 py-4">
                                    <MdModeEdit className='w-6 h-6 text-[#636AE8FF]' />
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
    )
}

export default EventAccordion