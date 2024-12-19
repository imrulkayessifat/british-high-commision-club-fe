"use client";

import React, { useState, useTransition } from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import {
    Form,
    FormField,
    FormMessage
} from "@/components/ui/form"
import { manualCheckInSheet } from '@/components/hooks/manual-checkin-sheet';
import { useCreateMemberVisit } from '@/components/hooks/member-visit/use-create-member-visit';
import { ManualCheckInSchema } from '@/lib/schema';
import { Member, MemberVisit } from '@/lib/types';
import { useSearchMemberList } from '@/components/hooks/member/use-search-member-list';
import { cn } from '@/lib/utils';
const ManualCheckInForm = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const { onClose } = manualCheckInSheet()
    const [isPending, startTransition] = useTransition();
    const mutation = useSearchMemberList()
    const mutationMemberVisit = useCreateMemberVisit()
    const form = useForm<z.infer<typeof ManualCheckInSchema>>({
        resolver: zodResolver(ManualCheckInSchema),
        defaultValues: {
            FullName: '',
            PhoneNo: '',
            Email: '',
        },
    })
    const searchMember = async (data: z.infer<typeof ManualCheckInSchema>) => {
        const resData = await mutation.mutateAsync(data)
        setMembers(resData)
        if (resData.error) {
            return { error: 'Member search failed!' }
        }

        return { success: 'Member search successfully' }
    }
    const onSubmit = (data: z.infer<typeof ManualCheckInSchema>) => {
        startTransition(() => {
            const promise = searchMember(data)

            toast.promise(promise, {
                loading: 'Searching Member...',
                success: (data) => {
                    if (data.error) {
                        return `Searching Member failed: ${data.error}`
                    } else {

                        return `Searching Member successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    const createMemberVisit = async (data: MemberVisit) => {
        const resData = await mutationMemberVisit.mutateAsync(data)
        if (resData.error) {
            return { error: 'Member Visit failed!' }
        }

        return { success: 'Member Visit successfully' }
    }
    const onSubmitMemberVisit = (data: MemberVisit) => {
        startTransition(() => {
            const promise = createMemberVisit(data)

            toast.promise(promise, {
                loading: 'Creating Member Visit...',
                success: (data) => {
                    if (data.error) {
                        return `Creating Member Visit failed: ${data.error}`
                    } else {

                        return `Creating Member Visit successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    const handleDecline = (memberId: number) => {
        // Remove the specific member from visible members
        setMembers(prev => prev.filter(member => member.id !== memberId));
    }
    return (
        <div className='flex flex-col  gap-3'>
            <Form {...form}>
                <form onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        form.handleSubmit(onSubmit)()
                    }
                }} className='flex justify-between flex-wrap gap-3'>
                    <FormField
                        control={form.control}
                        name="FullName"
                        render={({ field }) => (
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
                                    disabled={isPending}
                                    placeholder="Name"
                                    {...field}
                                />
                                <FormMessage />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="PhoneNo"
                        render={({ field }) => (
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
                                    disabled={isPending}
                                    placeholder="Phone Number"
                                    {...field}
                                />
                                <FormMessage />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <div className="relative flex items-center h-9 rounded-lg bg-[#F3F4F6FF] overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input
                                    className="peer h-full w-full outline-none bg-[#F3F4F6FF] text-sm  text-[#104263FF] pr-2"
                                    type="email"
                                    id="Email"
                                    disabled={isPending}
                                    placeholder="Email Address"
                                    {...field}
                                />
                                <FormMessage />
                            </div>
                        )}
                    />
                </form>
            </Form>
            {
                members.length > 0 && members.map((member: Member, key) => (
                    <div key={key} className='flex min-w-[400px] justify-between rounded-md p-2 bg-[#DEEFFADE]'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3'>
                                <Avatar className='w-24 h-24 cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col'>
                                    <p className='text-xl font-bold text-[#104263FF]'>{member.FullName}</p>
                                    <span className='text-sm font-normal text-[#104263FF]'>{member.Profession}</span>
                                    <div className='flex gap-2'>
                                        <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>{member.Priority}</button>
                                        <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>{member.MaxGuestAllow! > 0 ? 'Guest Allowed' : 'Guest Not Allowed'}</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm leading-5 text-[#323842FF]'>ID: {member.MemberID}</p>
                                <p className='text-sm leading-5 text-[#323842FF]'>Phone Number: {member.PhoneNo}</p>
                                <p className='text-sm leading-5 text-[#323842FF]'>Email: {member.Email}</p>
                            </div>
                        </div>
                        <div className='flex h-full flex-col gap-3 justify-center items-center'>
                            <button disabled={member.IsCheckIn} onClick={() => {
                                if (member.id && member.MaxGuestAllow !== undefined) {
                                    onSubmitMemberVisit({
                                        MemberInfoID: member.id,
                                    });
                                    onClose();
                                } else {
                                    toast.error("Member data is incomplete. Cannot proceed.");
                                }
                            }} className={cn('px-3 py-2 bg-[#1DD75BFF] rounded-[6px] text-sm',member.IsCheckIn && 'opacity-25 cursor-not-allowed')}>
                                Check-in
                            </button>
                            <button onClick={() => handleDecline(member.id!)} className='px-3 py-2 bg-[#DE3B40FF] rounded-[6px] text-sm text-white'>
                                Decline
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ManualCheckInForm