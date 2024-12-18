import { create } from 'zustand'

type CheckOutSheetState = {
    id?: number
    isOpen: boolean
    onOpen: (id: number) => void
    onClose: () => void
}

export const checkOutSheet = create<CheckOutSheetState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: number) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined })
}))