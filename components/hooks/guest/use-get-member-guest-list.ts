import { useQuery } from "@tanstack/react-query";

export const useGetMemberGuestList = ({ id }: { id: number }) => {
    const query = useQuery({
        queryKey: ["member_guest_list"],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member-guest?memberVisitId=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error("Failed to fetch member guest list");
            }
            const data = await res.json();
            return data;
        },
        gcTime:0
    })
    return query;
}