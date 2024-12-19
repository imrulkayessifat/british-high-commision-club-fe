"use client";

import React from 'react'
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";

import { cn } from '@/lib/utils';
import { checkOutSheet } from '@/components/hooks/checkout-sheet';
import { useGetMemberVisitList } from '@/components/hooks/member-visit/use-get-member-visit-list';
import { MemberVisit } from '@/lib/types';

const TodayCheckInList = () => {
    const { onOpen } = checkOutSheet()
    const { data, isLoading } = useGetMemberVisitList();
    if (isLoading) {
        return (
            <div>
                ...
            </div>
        )
    }
    return (
        <div className="relative overflow-x-auto shadow sm:rounded-lg">
            <table className="table-auto w-full min-w-max text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            All Members
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                            In Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Out Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((membervisit: MemberVisit, key: number) => (
                            <tr key={key} className="odd:bg-white  even:bg-gray-50  border-b">
                                <th onClick={membervisit.OutTime ?  undefined : () => onOpen(membervisit.id!)} className={cn("px-6 py-4 font-medium text-[#104263FF] whitespace-nowrap", !!membervisit.OutTime === false && 'cursor-pointer underline pointer-events-auto')}>
                                    {membervisit.id}
                                </th>
                                <td className="px-6 py-4">
                                    {membervisit.Member!.FullName}
                                </td>
                                <td className="px-6 py-4">
                                    {membervisit.Member!.Email}
                                </td>
                                <td className="px-6 py-4">
                                    {membervisit.Member!.PhoneNo}
                                </td>
                                <td className="px-6 py-4">
                                    {membervisit.Member!.Priority}
                                </td>
                                <td className="px-6 py-4">
                                    {membervisit.InTime}
                                </td>
                                <td className="px-6 py-4">
                                    {membervisit.OutTime ? membervisit.OutTime : ''}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        membervisit.OutTime ? (
                                            <FaCheckCircle className='text-green-400' />
                                        ) : (
                                            <FaMinusCircle className='text-red-400' />
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodayCheckInList