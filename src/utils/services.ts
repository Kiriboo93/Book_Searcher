/* Petición para obtener las categorías. */
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