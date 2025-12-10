import "../../css/card.css";
import { Book } from "../../types/types";
import { shortenString, removeRepeatedStrings } from "../../utils/tools";
import { Link } from 'react-router';
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function Card({ book }: { book: Book }) {
    /**
     * Context of the aplication.
     */
    const context = useContext(SearchContext);

    /**
     * Limiting title characters.
     */
    const title: string = shortenString(book.title, 60);

    /**
     * Formatting author string.
     */
    let authors: string = "";
    const all: string[] = removeRepeatedStrings(book.author_name);
    for (const i in all) {
        authors += " & " + all[i];
    }

    /**
     * Reducing author string for display.
     */
    let shortAuthors: string = shortenString(authors.substring(3, authors.length), 50);

    /**
     * Saves book key in the context to get information in book info page.
     */
    const saveBookKey = () => {
        context.setBookKey(book.key);
        context.setBookCover(book.cover_i);
    }

    return (
        <Link data-testid="card" className="card" onClick={saveBookKey} to="/bookinfo">
            <img className="card-img" data-testid="card-cover" src={book.cover_i === undefined ? "./default_cover.png" : "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title + " cover image."} />
            <div className="card-text">
                <h4 data-testid="card-title"><b>{title}</b></h4>
                <p data-testid="card-body">By {shortAuthors} in {book.first_publish_year}</p>
            </div>
        </Link>
    );
}

export default Card;