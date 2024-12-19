import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MemberVisit } from "@/lib/types";

interface UseEditMemberVisitProps {
    id?: number;
    token?: string;
}

export const useEditMemberVisit = ({ id }: UseEditMemberVisitProps) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (data: MemberVisit) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member-visit/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data
                })
            })

            return await req.json()
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