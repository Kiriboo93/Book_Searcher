import { ReactNode } from "react";

/**
 * Interface for searchInput parameters.
 */
export interface SearchContextTypes {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    books: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

/**
 * Interface for components to render.
 */
export interface Props {
    children: ReactNode
}

/**
 * Interface for each Book.
 */
export interface Book {
    author_name: string[],
    cover_i: string,
    title: string,
    first_publish_year: number
}