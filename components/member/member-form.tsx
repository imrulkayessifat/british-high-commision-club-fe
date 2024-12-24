"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'

import PhoneInput from 'react-phone-input-2'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormField,
    FormMessage,
} from "@/components/ui/form"
import 'react-phone-input-2/lib/style.css'
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar';
import { MemberSchema } from '@/lib/schema'

type FormValues = z.input<typeof MemberSchema>
type Props = {
    id?: number;
    defaultValues?: FormValues;
    onSubmit: (values: z.infer<typeof MemberSchema>) => void;
    disabled?: boolean;
}

const MemberForm = ({
    id,
    defaultValues,
    onSubmit,
    disabled
}: Props) => {
    const form = useForm<z.infer<typeof MemberSchema>>({
        resolver: zodResolver(MemberSchema),
        defaultValues: defaultValues || {
            MemberID: '',
            FullName: '',
            PhoneNo: '',
            Email: '',
            PresentAddress: '',
            PermanentAddress: '',
            Country: '',
            Profession: '',
            Status: 'ACTIVE',
            Gender: 'MALE',
            Priority: 'LOW',
            Rfid: '',
            IsCheckIn: false,
            MaxGuestAllow: undefined
        },
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <FormField
                    control={form.control}
                    name="MemberID"
                    render={({ field }) => (
                        <div className='flex flex-col gap-2 w-full'>
                            <p className='text-[14px] leading-[22px] font-bold text-[#104263FF]'>
                                Avatar
                            </p>
                            <div className='flex gap-4 items-center w-full'>
                                <Avatar className='w-16 h-16 cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className='text-[14px] leading-[22px] font-semibold underline text-[#104263FF]'>
                                    Upload
                                </p>
                                <div className='flex flex-col gap-1 w-full'>
                                    <p className='text-[14px] leading-[22px] font-bold font-inter'>
                                        Member ID <span className='text-red-300 text-xs'>*</span>
                                    </p>
                                    <input disabled={disabled || !!id} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                                    <FormMessage />
                                </div>
                            </div>
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="FullName"
                    render={({ field }) => (
                        <div className='w-full'>
                            <p className='text-[14px] leading-[22px] font-bold font-inter'>Full Name <span className='text-red-300 text-xs'>*</span></p>
                            <input disabled={disabled} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
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
                            {/* <input type='number' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' /> */}
                            <PhoneInput
                                disabled={disabled}
                                country={'bd'}
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
                        <div className='w-full'>
                            <p className='text-[14px] leading-[22px] font-bold font-inter'>Email <span className='text-red-300 text-xs'>*</span></p>
                            <input disabled={disabled} {...field} type='email' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                            <FormMessage />
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="PresentAddress"
                    render={({ field }) => (
                        <div className='w-full'>
                            <p className='text-[14px] leading-[22px] font-bold font-inter'>Present Address</p>
                            <input disabled={disabled} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                            <FormMessage />
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="PermanentAddress"
                    render={({ field }) => (
                        <div className='w-full'>
                            <p className='text-[14px] leading-[22px] font-bold font-inter'>Permanent Address</p>
                            <input disabled={disabled} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                            <FormMessage />
                        </div>
                    )}
                />
                <div className='flex flex-col xl:flex-row gap-5 w-full'>
                    <FormField
                        control={form.control}
                        name="Country"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Country <span className='text-red-300 text-xs'>*</span></p>
                                <Select disabled={disabled} onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full h-9 focus:ring-0 focus:ring-offset-0">
                                        <SelectValue placeholder="Select Your Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>UK</SelectLabel>
                                            <SelectItem value="USA">USA</SelectItem>
                                            <SelectItem value="BD">BD</SelectItem>
                                            <SelectItem value="IND">IND</SelectItem>
                                            <SelectItem value="FIN">FIN</SelectItem>
                                            <SelectItem value="GER">GER</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Profession"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Profession</p>
                                <input disabled={disabled} {...field} type='text' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none' />
                                <FormMessage />
                            </div>
                        )}
                    />
                </div>
                <div className='flex flex-col xl:flex-row gap-5 w-full'>
                    <FormField
                        control={form.control}
                        name="Priority"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Priority <span className='text-red-300 text-xs'>*</span></p>
                                <Select disabled={disabled} onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full h-9 focus:ring-0 focus:ring-offset-0">
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Priority</SelectLabel>
                                            <SelectItem value="HIGH">HIGH</SelectItem>
                                            <SelectItem value="LOW">LOW</SelectItem>
                                            <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="MaxGuestAllow"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Allowed Guest Count</p>
                                <input
                                    value={field.value ?? ''}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (inputValue === '') {
                                            field.onChange(undefined);
                                        } else {
                                            // Allow single "0", but remove leading zeros for other numbers
                                            field.onChange(Number(e.target.value));
                                        }
                                    }}
                                    disabled={disabled} min={0} type='number' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                                <FormMessage />
                            </div>
                        )}
                    />
                </div>
                <div className='flex flex-col xl:flex-row gap-5 w-full'>
                    <FormField
                        control={form.control}
                        name="Gender"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>Gender <span className='text-red-300 text-xs'>*</span></p>
                                <Select disabled={disabled} onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full h-9 focus:ring-0 focus:ring-offset-0">
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Gender</SelectLabel>
                                            <SelectItem value="MALE">MALE</SelectItem>
                                            <SelectItem value="FEMALE">FEMALE</SelectItem>
                                            <SelectItem value="OTHERS">OTHERS</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Rfid"
                        render={({ field }) => (
                            <div className='w-full xl:w-1/2'>
                                <p className='text-[14px] leading-[22px] font-bold font-inter'>RFID <span className='text-red-300 text-xs'>*</span></p>
                                <input disabled={disabled} {...field} type='string' className='bg-[F2F8FDFF] w-full rounded-[6px] h-9 px-5 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                                <FormMessage />
                            </div>
                        )}
                    />
                </div>
                <div className="h-1 border-b border-[#F3F4F6FF] text-2xl text-center">

                </div>
                <div className='flex items-center justify-end w-full pb-3'>
                    <button type='submit' disabled={disabled} className='bg-[#104263FF] rounded-[6px] text-white px-5 py-2'>
                        <span>{id ? "Update" : "Create"}</span>
                    </button>
                </div>
            </form>
        </Form>
    )
}

export default MemberForm