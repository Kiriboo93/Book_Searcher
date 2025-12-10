import { useState, useEffect } from "react";
import { getBookInfo } from "./services";
import { BookInfo } from "../types/types";

/**
 * Custom hook to get book info.
 * @returns 
 */
export const useFetchBookInfo = (query: string) => {
    /**
     * Variable with book information.
     */
    const [bookInfo, setBookInfo] = useState<BookInfo>();

    useEffect(() => {
        getBookInfo(query).then((data) => {
            setBookInfo(data);
        });
    }, [query]);

    return { bookInfo }
}