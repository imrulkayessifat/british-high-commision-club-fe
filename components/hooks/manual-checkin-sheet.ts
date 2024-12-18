import { create } from 'zustand'

type ManualCheckInSheetState = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const manualCheckInSheet = create<ManualCheckInSheetState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))