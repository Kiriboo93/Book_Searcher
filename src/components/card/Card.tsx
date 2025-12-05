import "../../css/card.css";
import { Book } from "../../types/types";
import { shortenString, removeRepeatedStrings } from "../../utils/tools";

function Card({ book }: { book: Book }) {
    /**
     * Limiting title characters.
     */
    let title: string = shortenString(book.title, 60);

    /**
     * Formatting author string.
     */
    let authors: string = "";
    let all: string[] = removeRepeatedStrings(book.author_name);
    for (const i in all) {
        authors += " & " + all[i];
    }

    /**
     * Reducing author string for display.
     */
    let shortAuthors: string = shortenString(authors.substring(3, authors.length), 50);

    return (
        <div className="card" data-testid="card">
            <img className="card-img" data-testid="card-cover" src={book.cover_i === undefined ? "./default_cover.png" : "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title + " cover image."} />
            <div className="card-text">
                <h4 data-testid="card-title"><b>{title}</b></h4>
                <p data-testid="card-body">By {shortAuthors} in {book.first_publish_year}</p>
            </div>
        </div>
    );
}

export default Card;