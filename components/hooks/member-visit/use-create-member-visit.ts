import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MemberVisit } from "@/lib/types";


export const useCreateMemberVisit = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: MemberVisit) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member-visit`, {
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
            queryClient.invalidateQueries({ queryKey: ["member_visit_list"] })
        },
        onError: () => {
            queryClient.invalidateQueries({ queryKey: ["member_visit_list"] })
        }
    })
    return mutation;
}