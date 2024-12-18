import { create } from 'zustand'

type NewAddMemberSheetState = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const addMemberSheet = create<NewAddMemberSheetState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))