"use client";

import React, { useTransition } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';
import PhoneInput from 'react-phone-input-2'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from 'sonner';

import {
    Dialog,
    DialogOverlay,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormField,
    FormMessage,
} from "@/components/ui/form"
import 'react-phone-input-2/lib/style.css'
import { useCreateGuest } from '@/components/hooks/guest/use-create-guest';

import { GuestSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

interface GuestFormProps {
    MemberVisitID: number
    MaxGuestAllow: number
    GuestLength: number
}

const GuestForm: React.FC<GuestFormProps> = ({
    MemberVisitID,
    MaxGuestAllow,
    GuestLength
}) => {
    const [isPending, startTransition] = useTransition();
    const mutation = useCreateGuest()
    const form = useForm<z.infer<typeof GuestSchema>>({
        resolver: zodResolver(GuestSchema),
        defaultValues: {
            MemberVisitID,
            FullName: '',
            PhoneNo: '',
            Rfid: '',
        },
    })
    const createMemberGuest = async (data: z.infer<typeof GuestSchema>) => {
        const resData = await mutation.mutateAsync(data)

        if (resData.error) {
            return { error: 'Guest create failed!' }
        }

        return { success: 'Guest create successfully' }
    }

    const onSubmit = (data: z.infer<typeof GuestSchema>) => {
        startTransition(() => {
            const promise = createMemberGuest(data)

            toast.promise(promise, {
                loading: 'Creating Guest...',
                success: (data) => {
                    if (data.error) {
                        return `Creating Guest failed: ${data.error}`
                    } else {

                        return `Creating Guest successful: ${data.success}`
                    }
                },
                error: 'An unexpected error occurred',
            })
        });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button disabled={MaxGuestAllow === GuestLength} className={cn('flex min-w-[104px] h-9 text-white items-center justify-center gap-2 p-2 rounded-md bg-[#104263FF]', MaxGuestAllow === GuestLength && 'opacity-20 cursor-not-allowed')}>
                    <IoMdAddCircleOutline />
                    <p>Add</p>
                </button>
            </DialogTrigger>
            <DialogOverlay className='bg-black/20' />
            <DialogContent className='bg-[#F2F8FDFF] left-[90%] top-[40%] translate-x-[-90%] translate-y-[-40%]'>
                <DialogHeader>
                    <DialogTitle>
                        Add Guest
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <FormField
                            control={form.control}
                            name="FullName"
                            render={({ field }) => (
                                <div className='w-full'>
                                    <p className='text-[14px] leading-[22px] font-bold font-inter'>Full Name <span className='text-red-300 text-xs'>*</span></p>
                                    <input disabled={isPending} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                                    <FormMessage />
                                </div>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PhoneNo"
                            render={({ field }) => (
                                <div className='w-full'>
                                    <p className='text-[14px] leading-[22px] font-bold font-inter'>Phone Number <span className='text-red-300 text-xs'>*</span></p>
                                    <PhoneInput
                                        disabled={isPending}
                                        country={'bd'}
                                        {...field}
                                    />
                                    <FormMessage />
                                </div>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Rfid"
                            render={({ field }) => (
                                <div className='w-full'>
                                    <p className='text-[14px] leading-[22px] font-bold font-inter'>RFID <span className='text-red-300 text-xs'>*</span></p>
                                    <input disabled={isPending} {...field} type='string' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                                    <FormMessage />
                                </div>
                            )}
                        />
                        <DialogFooter>
                            <button type='submit' disabled={isPending} className='flex min-w-[104px] h-9 text-white items-center justify-center gap-2 p-2 rounded-md bg-[#104263FF]'>
                                <p>Check-in</p>
                            </button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}

export default GuestForm