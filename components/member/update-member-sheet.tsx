/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useTransition } from 'react'
import { z } from "zod"
import { toast } from "sonner"

import {
    Sheet,
    SheetTitle,
    SheetContent,
} from "@/components/ui/sheet"

import {
    MemberSchema,
} from '@/lib/schema';
import { editMemberSheet } from '@/components/hooks/edit-member-sheet';
import MemberForm from '@/components/member/member-form';
import { useGetSingleMember } from '@/components/hooks/member/use-get-single-member'
import { useEditMember } from '@/components/hooks/member/use-edit-member'

const UpdateMemberSheet = () => {
    const { isOpen, onClose, id } = editMemberSheet();
    const [isPending, startTransition] = useTransition();
    const memberQuery = useGetSingleMember({ id })

    const mutation = useEditMember({ id })
    const isLoading = memberQuery.isLoading

    const defaultValues = memberQuery.data ? {
        MemberID: memberQuery.data.MemberID,
        FullName: memberQuery.data.FullName,
        PhoneNo: memberQuery.data.PhoneNo,
        Email: memberQuery.data.Email,
        PresentAddress: memberQuery.data.PresentAddress || "",
        PermanentAddress: memberQuery.data.PermanentAddress || "",
        Country: memberQuery.data.Country,
        Profession: memberQuery.data.Profession || "",
        Gender: memberQuery.data.Gender,
        Status: memberQuery.data.Status,
        Priority: memberQuery.data.Priority,
        Rfid: memberQuery.data.Rfid,
        IsCheckIn: memberQuery.data.IsCheckIn,
        MaxGuestAllow: memberQuery.data.MaxGuestAllow || ""
    } : {
        MemberID: "",
        FullName: '',
        PhoneNo: '',
        Email: '',
        PresentAddress: "",
        PermanentAddress: "",
        Country: '',
        Profession: "",
        Gender: 'MALE',
        Status: 'ACTIVE',
        Priority: 'LOW',
        Rfid: '',
        IsCheckIn: false,
        MaxGuestAllow: 0
    };


    const editMember = async (data: z.infer<typeof MemberSchema>) => {
        const resData = await mutation.mutateAsync(data)

        if (resData.error) {
            return { error: 'Member update failed!' }
        }

        return { success: 'Member update successfully' }
    }

    const onSubmit = (data: z.infer<typeof MemberSchema>) => {
        startTransition(() => {
            const promise = editMember(data)

            toast.promise(promise, {
                loading: 'Updating Member...',
                success: (data) => {
                    if (data.error) {
                        return `Updating Member failed: ${data.error}`
                    } else {

                        return `Updating Member successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='flex rounded-tl-2xl rounded-bl-2xl overflow-y-auto flex-col gap-5 xl:w-[45%] p-0 xl:max-w-none sm:w-[400px] sm:max-w-[540px] bg-[linear-gradient(to_bottom,#DEE1E6FF,#E4E7DFFF)]'>
                <SheetTitle className='pt-7 px-12'>
                    <p className='text-[20px] leading-[30px] font-bold text-[#104263FF]'>Member Details</p>
                </SheetTitle>
                <div className="h-1 border-b border-[#F3F4F6FF] text-2xl text-center">

                </div>
                <div className='flex w-full flex-col gap-3 pt-6 px-12'>
                    <div className='flex gap-3 items-center'>
                        <img
                            src='/member-sheet.png'
                            alt='Member Sheet'
                            className='h-[36px] w-[36px]'
                        />
                        <p className='text-[20px] leading-[30px] font-bold text-[#104263FF]'>Member information</p>
                    </div>
                    {
                        isLoading ? (
                            <div>
                                ...
                            </div>
                        ) : (
                            <MemberForm
                                id={id}
                                onSubmit={onSubmit}
                                disabled={isPending}
                                defaultValues={defaultValues}
                            />
                        )
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default UpdateMemberSheet