export const fetchApi = async (query) => {
    const promise = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    });
    const res = await promise.json();
    return res;
}