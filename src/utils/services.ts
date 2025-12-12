/* Petition to get books filtered by genre, author or year. */
export async function getBooks(query: string) {
    const res = await fetch("https://openlibrary.org/search.json?" + query, {
        method: "GET",
        cache: "reload"
    });

    if (!res.ok) {
        throw new Error("Fetch failed");
    }

    return res.json();
}

/* Petition to get book and author info. */
export async function getBookAuthorInfo(query: string) {
    const res = await fetch("https://openlibrary.org" + query + ".json", {
        method: "GET"
    });

    if (!res.ok) {
        throw new Error("Fetch failed");
    }

    return res.json();
}