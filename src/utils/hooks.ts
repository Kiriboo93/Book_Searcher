import { useState, useEffect } from "react";
import { getBookAuthorInfo } from "./services";
import { BookInfo, AuthorInfo } from "../types/types";

/**
 * Custom hook to get book info.
 * @returns  book information.
 */
export const useFetchBookInfo = (query: string) => {
    /**
     * Variable with book information.
     */
    const [bookInfo, setBookInfo] = useState<BookInfo>();

    useEffect(() => {
        getBookAuthorInfo(query).then((data) => {
            setBookInfo(data);
        });
    }, [query]);

    return { bookInfo }
}

/**
 * Custom hook to get author info.
 * @returns author information.
 */
export const useFetchAuthorInfo = (query: string) => {
    /**
     * Variable with author information.
     */
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>();

    useEffect(() => {
        getBookAuthorInfo(query).then((data) => {
            setAuthorInfo(data);
        });
    }, [query]);

    return { authorInfo }
}