import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Member } from "@/lib/types";


export const useCreateMember = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: Member) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member`, {
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
            queryClient.invalidateQueries({ queryKey: ["member_list"] })
        },
        onError: () => {
            queryClient.invalidateQueries({ queryKey: ["member_list"] })
        }
    })
    return mutation;
}