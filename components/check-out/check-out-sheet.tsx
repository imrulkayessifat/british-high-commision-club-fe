/* eslint-disable @next/next/no-img-element */
"use client"

import React, { startTransition } from 'react'
import { toast } from "sonner"

import {
    Sheet,
    SheetTitle,
    SheetContent,
} from "@/components/ui/sheet"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import CheckOutForm from '@/components/check-out/check-out-form'
import { checkOutSheet } from '@/components/hooks/checkout-sheet'
import { useGetSingleMemberVisit } from '@/components/hooks/member-visit/use-get-single-member-visit'
import { useEditMemberVisit } from '@/components/hooks/member-visit/use-edit-member-visit'
import { MemberVisit } from '@/lib/types'
import { cn } from '@/lib/utils'

const CheckOutSheet = () => {
    const { isOpen, onClose, id } = checkOutSheet()
    const memberVisitQuery = useGetSingleMemberVisit({ id })
    const mutation = useEditMemberVisit({ id })
    const isLoading = memberVisitQuery.isLoading || mutation.isPending
    if (isLoading) {
        return (
            <div>
                ...
            </div>
        )
    }
    console.log("id", id)
    const editMemberVisit = async (data: MemberVisit) => {
        const resData = await mutation.mutateAsync(data)

        if (resData.error) {
            return { error: 'Member Visit update failed!' }
        }
        onClose()
        return { success: 'Member Visit update successfully' }
    }

    const onSubmit = (data: MemberVisit) => {
        startTransition(() => {
            const promise = editMemberVisit(data)

            toast.promise(promise, {
                loading: 'Updating Member Visit...',
                success: (data) => {
                    if (data.error) {
                        return `Updating Member Visit failed: ${data.error}`
                    } else {

                        return `Updating Member Visit successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='flex rounded-tl-2xl rounded-bl-2xl overflow-y-auto flex-col gap-3 xl:w-[45%] p-0 xl:max-w-none sm:min-w-[540px] bg-[linear-gradient(to_bottom,#DEE1E6FF,#E4E7DFFF)]'>
                <SheetTitle className='pt-5 px-12'>
                    <p className='text-[20px] leading-[30px] font-bold text-[#104263FF]'>Check-Out</p>
                </SheetTitle>
                <div className="h-1 border-b border-[#F3F4F6FF] text-2xl text-center">

                </div>
                {
                    memberVisitQuery.data && (
                        <div className='flex min-w-[400px] justify-between rounded-md py-2 px-5'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3'>
                                    <Avatar className='w-24 h-24 cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <p className='text-xl font-bold text-[#104263FF]'>{memberVisitQuery.data.Member.FullName}</p>
                                        <span className='text-sm font-normal text-[#104263FF]'>{memberVisitQuery.data.Member.Profession}</span>
                                        <div className='flex gap-2'>
                                            <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>{memberVisitQuery.data.Member.Priority}</button>
                                            <button className='px-2 py-1 text-white rounded-md bg-[#104263FF]'>{memberVisitQuery.data.Member.MaxGuestAllow! > 0 ? 'Guest Allowed' : 'Guest Not Allowed'}</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm leading-5 text-[#323842FF]'>ID: {memberVisitQuery.data.Member.MemberID}</p>
                                    <p className='text-sm leading-5 text-[#323842FF]'>Phone Number: {memberVisitQuery.data.Member.PhoneNo}</p>
                                    <p className='text-sm leading-5 text-[#323842FF]'>Email: {memberVisitQuery.data.Member.Email}</p>
                                </div>
                                <button disabled={memberVisitQuery.data.GuestCount > 0} onClick={() => {
                                    onSubmit({
                                        MemberInfoID: memberVisitQuery.data.Member.id
                                    });
                                }
                                }
                                    className={cn('bg-[#DE3B40FF] rounded-[6px] px-2 py-2 h-10 w-24',memberVisitQuery.data.GuestCount > 0 && 'opacity-20 cursor-not-allowed')}>
                                    Check-out
                                </button>
                            </div>
                        </div>
                    )
                }
                {
                    id && (

                        <CheckOutForm GuestCount={memberVisitQuery.data.GuestCount} MaxGuestAllow={memberVisitQuery.data.Member.MaxGuestAllow} id={id} />
                    )
                }
            </SheetContent>
        </Sheet>
    )
}

export default CheckOutSheet