"use client";

import React, { startTransition } from 'react'
import { toast } from 'sonner';
import { FaMinusCircle } from 'react-icons/fa';

import GuestForm from '@/components/guest/guest-form';
import { MemberGuest } from '@/lib/types';
import { useGetMemberGuestList } from '@/components/hooks/guest/use-get-member-guest-list';
import { cn } from '@/lib/utils';
import { useEditMemberGuest } from '@/components/hooks/guest/use-edit-member-guest';

interface CheckOutFormProps {
    id: number,
    MaxGuestAllow: number
    GuestCount: number
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({
    id,
    MaxGuestAllow,
    GuestCount
}) => {
    const { data, isLoading } = useGetMemberGuestList({ id });
    const mutation = useEditMemberGuest()
    if (isLoading) {
        return (
            <div>
                ...
            </div>
        )
    }

    console.log("data length : ", MaxGuestAllow)
    const editMemberVisit = async (data: MemberGuest) => {
        const resData = await mutation.mutateAsync(data)

        if (resData.error) {
            return { error: 'Guest Visit update failed!' }
        }
        return { success: 'Guest Visit update successfully' }
    }

    const onSubmit = (data: MemberGuest) => {
        startTransition(() => {
            const promise = editMemberVisit(data)

            toast.promise(promise, {
                loading: 'Updating Guest Visit...',
                success: (data) => {
                    if (data.error) {
                        return `Updating Guest Visit failed: ${data.error}`
                    } else {

                        return `Updating Guest Visit successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    return (
        <div className='flex flex-col gap-3 mx-5'>
            <div className='flex justify-between flex-wrap gap-3'>
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
            <p className='font-inter text-xl leading-[30px] font-bold text-neutral-700'>Guest List</p>
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
                        {
                            data.map((memberguest: MemberGuest, key: number) => (
                                <tr key={key} className="odd:bg-white  even:bg-gray-50  border-b">
                                    <td className="px-6 py-4">
                                        {memberguest.FullName}
                                    </td>

                                    <td className="px-6 py-4">
                                        {memberguest.PhoneNo}
                                    </td>
                                    <td className="px-6 py-4">
                                        {memberguest.Rfid}
                                    </td>
                                    <td className="px-6 py-4">
                                        {memberguest.InTime}
                                    </td>
                                    <td className="px-6 py-4">
                                        {memberguest.OutTime ? memberguest.OutTime : ''}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className={cn(memberguest.OutTime && 'opacity-20 cursor-not-allowed')} onClick={() => {
                                            onSubmit({
                                                id: memberguest.id!,
                                                MemberVisitID: id
                                            })
                                        }} disabled={!!memberguest.OutTime}>
                                            <FaMinusCircle className={cn('text-red-400')} />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
            <div className='flex justify-end'>
                <GuestForm GuestLength={GuestCount} MaxGuestAllow={MaxGuestAllow} MemberVisitID={id} />
            </div>
        </div>
    )
}

export default CheckOutForm