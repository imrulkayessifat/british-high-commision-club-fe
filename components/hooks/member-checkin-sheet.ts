import { create } from 'zustand'

type MemberCheckInSheetState = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const memberCheckInSheet = create<MemberCheckInSheetState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))