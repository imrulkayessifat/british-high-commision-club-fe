"use client"

import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import EventForm from '@/components/event/event-form'
import { createEventDialog } from '@/components/hooks/create-event-dialog'

const CreateEventDialog = () => {
    const { isOpen, onClose } = createEventDialog()
    const onSubmit = () => {

    }
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent style={{ background: 'linear-gradient(180deg, #DEE1E6FF 0%, #E4E7DFFF 100%)' }} className='max-w-[70%] max-h-[90%] overflow-y-auto'>
                <DialogHeader className='flex justify-between w-full border-b-[3px] pb-4 border-[#F6F6F8FF] '>
                    <DialogTitle className='text-[#104263FF]'>
                        Add Event
                    </DialogTitle>
                </DialogHeader>
                <p className='leading-[26px] font-bold text-[#104263FF]'>Detail</p>
                <EventForm onSubmit={onSubmit}/>
            </DialogContent>
        </Dialog>
    )
}

export default CreateEventDialog