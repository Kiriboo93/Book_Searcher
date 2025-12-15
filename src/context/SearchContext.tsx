import { createContext } from "react";
import React, { useState } from "react";
import { SearchContextTypes, Props, Book } from "../types/types";

/* Context default value. */
const searchContextDefaultValue: SearchContextTypes = {
    query: "",
    setQuery: () => { },
    books: [],
    setBooks: () => { },
    bookKey: "",
    setBookKey: () => { },
    bookCover: "",
    setBookCover: () => { },
    bookYear: 0,
    setBookYear: () => { }
}

/**
 * Creates context with default values.
 */
export const SearchContext = createContext<SearchContextTypes>(searchContextDefaultValue);

/* Provider of context.
 * @params {ReactNode} children - children to render.
 */
export const SearchContextProvider: React.FC<Props> = ({ children }) => {
    /**
     * Stores query from input to search books.
     */
    const [query, setQuery] = useState<string>("");

    /**
     * Stores the books seached through the query.
     */
    const [books, setBooks] = useState<Book[]>([]);

    /**
     * Stores query from input to search books.
     */
    const [bookKey, setBookKey] = useState<string>("");

    /**
     * Stores book cover because some books don't send it on its info.
     */
    const [bookCover, setBookCover] = useState<string>("");

    /**
     * Stores book publish year because some books don't send it on its info.
     */
    const [bookYear, setBookYear] = useState<number>(0);

    return <SearchContext.Provider value={{ query, setQuery, books, setBooks, bookKey, setBookKey, bookCover, setBookCover, bookYear, setBookYear }}>{children}</SearchContext.Provider>
}