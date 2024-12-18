import { create } from 'zustand'

type EditMemberSheetState = {
    id?: number
    isOpen: boolean
    onOpen: (id: number) => void
    onClose: () => void
}

export const editMemberSheet = create<EditMemberSheetState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: number) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined })
}))