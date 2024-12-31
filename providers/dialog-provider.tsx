"use client"

import { useMountedState } from "react-use"

import CreateEventDialog from "@/components/event/create-event-dialog"

const DialogProvider = () => {
    const isMounted = useMountedState()
    if (!isMounted) return null
    return (
        <>
            <CreateEventDialog />
        </>
    )
}

export default DialogProvider