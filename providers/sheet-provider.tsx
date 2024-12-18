"use client"

import { useMountedState } from "react-use"

import CreateMemberSheet from "@/components/member/create-member-sheet"
import UpdateMemberSheet from "@/components/member/update-member-sheet"
import ManualCheckInSheet from "@/components/check-in/manual-checkin-sheet"
import MemberCheckInSheet from "@/components/check-in/member-checkin-sheet"
import CheckOutSheet from "@/components/check-out/check-out-sheet"

const SheetProvider = () => {
    const isMounted = useMountedState()
    if (!isMounted) return null
    return (
        <>
            <CreateMemberSheet />
            <UpdateMemberSheet />
            <ManualCheckInSheet />
            <MemberCheckInSheet />
            <CheckOutSheet />
        </>
    )
}

export default SheetProvider