"use client";

import React from 'react'

const CheckOutForm = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='flex justify-between flex-wrap mx-auto px-5 gap-3'>
                <div className="relative flex items-center h-9 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm  text-[#104263FF] pr-2"
                        type="text"
                        id="FullName"
                        placeholder="Name"
                    />
                </div>
                <div className="relative flex items-center h-9 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm  text-[#104263FF] pr-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        id="PhoneNo"
                        min={0}
                        placeholder="Phone Number"
                    />
                </div>
                <div className="relative flex items-center h-9 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm  text-[#104263FF] pr-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="text"
                        id="Rfid"
                        placeholder="RFID"
                    />
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                In Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Out Time
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
                                01736011747
                            </td>
                            <td className="px-6 py-4">
                                TR007
                            </td>
                            <td className="px-6 py-4">
                                07:14 PM
                            </td>
                            <td className="px-6 py-4">
                                04:12 PM
                            </td>
                            <td className="px-6 py-4">
                                Active
                            </td>
                        </tr>
                        <tr className="odd:bg-white  even:bg-gray-50  border-b">
                            <td className="px-6 py-4">
                                John Hill
                            </td>

                            <td className="px-6 py-4">
                                01736011747
                            </td>
                            <td className="px-6 py-4">
                                TR007
                            </td>
                            <td className="px-6 py-4">
                                07:14 PM
                            </td>
                            <td className="px-6 py-4">
                                04:12 PM
                            </td>
                            <td className="px-6 py-4">
                                Active
                            </td>
                        </tr>
                        <tr className="odd:bg-white  even:bg-gray-50  border-b">
                            <td className="px-6 py-4">
                                John Hill
                            </td>

                            <td className="px-6 py-4">
                                01736011747
                            </td>
                            <td className="px-6 py-4">
                                TR007
                            </td>
                            <td className="px-6 py-4">
                                07:14 PM
                            </td>
                            <td className="px-6 py-4">
                                04:12 PM
                            </td>
                            <td className="px-6 py-4">
                                Active
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CheckOutForm