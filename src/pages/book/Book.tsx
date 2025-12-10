import "../../css/book.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useFetchBookInfo } from "../../utils/hooks";

function Book() {
    /**
     * Context of the aplication.
     */
    const context = useContext(SearchContext);

    /**
     * Using hook to get book data.
     */
    const { bookInfo } = useFetchBookInfo(context.bookKey);

    return (
        <div data-testid="book">
            <h2 className="book-title">{bookInfo?.title}</h2>
            <div className="book-container">
                <div className="book-div_row">
                    <div className="book-cover-container">
                        <img className="book-cover" src={context.bookCover === undefined ? "./default_cover.png" : "https://covers.openlibrary.org/b/id/" + context.bookCover + "-M.jpg"} alt={bookInfo?.title + " cover image."} />
                    </div>
                    <div className="book-desc">
                        <h3 className="book-info-subtitle">Summary</h3>
                        <p>{typeof bookInfo?.description === "string" ? bookInfo?.description : bookInfo?.description.value}</p>
                        <h3 className="book-info-subtitle">Author</h3>
                        <div>{bookInfo?.authors[0].author.key}</div>
                    </div>
                </div>
                <hr />
                <div className="book-div_row"></div>
            </div>
        </div>
    )
}

export default Book;