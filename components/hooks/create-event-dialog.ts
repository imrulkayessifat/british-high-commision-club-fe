import { create } from 'zustand'

type NewCreateEventDialogState = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const createEventDialog = create<NewCreateEventDialogState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))