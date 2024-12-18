/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'

import {
    Sheet,
    SheetTitle,
    SheetContent,
} from "@/components/ui/sheet"
import { memberCheckInSheet } from '@/components/hooks/member-checkin-sheet'
import MemberCheckInForm from '@/components/check-in/member-checkin-form'

const MemberCheckInSheet = () => {
    const { isOpen, onClose } = memberCheckInSheet()
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className='flex rounded-tl-2xl rounded-bl-2xl overflow-y-auto flex-col gap-5 xl:w-[45%] p-0 xl:max-w-none sm:min-w-[540px]  bg-[linear-gradient(to_bottom,#DEE1E6FF,#E4E7DFFF)]'>
                <SheetTitle className='pt-7 px-12'>
                    <p className='text-[20px] leading-[30px] font-bold text-[#104263FF]'>Member&apos;s Check-in</p>
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
                    <MemberCheckInForm />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MemberCheckInSheet