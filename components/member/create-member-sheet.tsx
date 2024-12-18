/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useTransition } from 'react'
import { z } from "zod"
import { toast } from 'sonner';

import {
    Sheet,
    SheetTitle,
    SheetContent,
} from "@/components/ui/sheet"
import {
    MemberSchema,
} from '@/lib/schema';
import { useCreateMember } from '@/components/hooks/member/use-create-member';
import { addMemberSheet } from '@/components/hooks/add-member-sheet';
import MemberForm from '@/components/member/member-form';

const CreateMemberSheet = () => {
    const { isOpen, onClose } = addMemberSheet()
    const mutation = useCreateMember()
    const [isPending, startTransition] = useTransition();

    const createMember = async (data: z.infer<typeof MemberSchema>) => {
        const resData = await mutation.mutateAsync(data, {
            onSuccess: () => {
                onClose()
            }
        })

        if (resData.error) {
            return { error: 'Member create failed!' }
        }

        return { success: 'Member create successfully' }
    }

    const onSubmit = (data: z.infer<typeof MemberSchema>) => {
        startTransition(() => {
            const promise = createMember(data)

            toast.promise(promise, {
                loading: 'Creating Member...',
                success: (data) => {
                    if (data.error) {
                        return `Creating Member failed: ${data.error}`
                    } else {

                        return `Creating Member successful: ${data.success}`
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
                    <p className='text-[20px] leading-[30px] font-bold text-[#104263FF]'>New member</p>
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
                    <MemberForm onSubmit={onSubmit} disabled={isPending} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CreateMemberSheet