"use client";

import React from 'react'

import { Member } from '@/lib/types';
import { useGetMemberList } from '@/components/hooks/member/use-get-member-list';
import { editMemberSheet } from '@/components/hooks/edit-member-sheet';

const MemberList = () => {
    const { data, isLoading } = useGetMemberList();
    const { onOpen } = editMemberSheet()
    if (isLoading) {
        return (
            <div>
                ...
            </div>
        )
    }

    return (
        <div className='flex w-full justify-center items-center min-h-[350px]'>
            <div className="w-full px-5">
                <div className='rounded-md border'>
                    <div className='relative w-full overflow-auto'>
                        <table className="w-full  caption-bottom text-sm">
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
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Priority
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((member: Member, key: number) => (
                                        <tr key={key} className="odd:bg-white  even:bg-gray-50  border-b ">
                                            <th onClick={() => onOpen(member.id!)} scope="row" className="px-6 cursor-pointer py-4 font-medium text-[#104263FF] underline whitespace-nowrap ">
                                                {member.MemberID}
                                            </th>
                                            <td className="px-6 py-4">
                                                {member.FullName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.Email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.PhoneNo}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.Gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.Priority}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.Status}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.CreatedAt}
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberList