import { useQuery } from "@tanstack/react-query";

interface UseGetSingleMemberVisitProps {
    id?: number;
}

export const useGetSingleMemberVisit = ({ id }: UseGetSingleMemberVisitProps) => {
    const query = useQuery({
        enabled: !!id,
        queryKey: ["single-member-visit", { id }],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member-visit/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error("Failed to fetch single member visit");
            }

            const data = await response.json();

            return data;
        },
        gcTime:0
    })

    return query;
}