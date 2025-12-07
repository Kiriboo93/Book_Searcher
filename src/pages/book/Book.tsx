import "../../css/book.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function Book() {
    /**
     * Context of the aplication.
     */
    const context = useContext(SearchContext);

    return (
        <div data-testid="book">

        </div>
    )
}

export default Book;