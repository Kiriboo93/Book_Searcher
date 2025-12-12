import { ReactNode } from "react";

/**
 * Interface for searchInput parameters.
 */
export interface SearchContextTypes {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    books: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>,
    bookKey: string,
    setBookKey: React.Dispatch<React.SetStateAction<string>>,
    bookCover: string,
    setBookCover: React.Dispatch<React.SetStateAction<string>>,
    bookYear: number,
    setBookYear: React.Dispatch<React.SetStateAction<number>>
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
    first_publish_year: number,
    key: string
}

/**
 * Interface for book info.
 */
export interface BookInfo {
    description: string | DescriptionObject,
    title: string,
    authors: Authors[]
}

/**
 * Interface for authors.
 */
interface Authors {
    author: ObjectKey,
    type: ObjectKey
}

/**
 * Interface for each object containing a key.
 */
interface ObjectKey {
    key: string,
}

/**
 * Interface for description when it is an object
 */
interface DescriptionObject {
    value: string,
    type: string
}

/**
 * Interface for author info.
 */
export interface AuthorInfo {
    name: string,
    bio: string | DescriptionObject
}