import { useQuery } from "@tanstack/react-query";

interface UseGetSingleMemberProps {
    id?: number;
}

export const useGetSingleMember = ({ id }: UseGetSingleMemberProps) => {
    const query = useQuery({
        enabled: !!id,
        queryKey: ["single-member", { id }],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error("Failed to fetch single member");
            }

            const data = await response.json();

            return data;
        }
    })

    return query;
}