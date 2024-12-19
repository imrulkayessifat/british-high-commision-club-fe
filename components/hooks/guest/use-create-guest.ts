import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MemberGuest } from "@/lib/types";


export const useCreateGuest = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: MemberGuest) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member-guest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data
                })
            })
            const res = await req.json()
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["member_guest_list"] })
            queryClient.invalidateQueries({ queryKey: ["single-member-visit"] })
        },
        onError: () => {
            queryClient.invalidateQueries({ queryKey: ["member_guest_list"] })
            queryClient.invalidateQueries({ queryKey: ["single-member-visit"] })
        }
    })
    return mutation;
}