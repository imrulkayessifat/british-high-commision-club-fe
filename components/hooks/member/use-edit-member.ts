import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Member } from "@/lib/types";

interface UseEditMemberProps {
    id?: number;
    token?: string;
}

export const useEditMember = ({ id }: UseEditMemberProps) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: Member) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member/${id}`, {
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
            queryClient.invalidateQueries({ queryKey: ["member_list"] })
        },
        onError: () => {
            queryClient.invalidateQueries({ queryKey: ["member_list"] })
        }
    })
    return mutation;
}