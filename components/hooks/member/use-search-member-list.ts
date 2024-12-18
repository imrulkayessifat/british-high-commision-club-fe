import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseSearchMemberProps {
    PhoneNo?: string;
    Email?: string;
    FullName?: string;
}

export const useSearchMemberList = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({ FullName, PhoneNo, Email }: UseSearchMemberProps) => {
            const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member?FullName=${FullName}&PhoneNo=${PhoneNo}&Email=${Email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
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