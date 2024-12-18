import { useQuery } from "@tanstack/react-query";


export const useGetMemberList = () => {
    const query = useQuery({
        queryKey: ["member_list"],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/member`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error("Failed to fetch member list");
            }
            const  data  = await res.json();
            return data;
        },
    })
    return query;
}