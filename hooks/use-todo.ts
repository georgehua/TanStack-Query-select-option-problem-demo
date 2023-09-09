import { useQuery } from "@tanstack/react-query";

// I set enabled to false until there's a user click to feed the real url
export const useTodosQuery = (url, select) =>
    useQuery({
        queryKey: ['todos', url],
        queryFn: async () => {
            const response = await fetch(url);
            const data = response.json();
            return data
        },
        enabled: !!url,
        select
    })

// useTodosCount
export const useTodosCount = () => useTodosQuery(null, (data) => {
    console.log("test from useTodosCount") // I also don't understand why console.log is not printing anything to terminal
    return data.length
})