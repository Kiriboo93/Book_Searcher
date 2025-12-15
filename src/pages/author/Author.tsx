import "../../css/pages/author.css";
import { SearchContext } from "../../context/SearchContext";
import SearchInput from "../../components/searchinput/SearchInput";
import CardContainer from "../../components/card/CardContainer";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../utils/services";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";

function Author() {
    /**
     * Current page asked.
     */
    const [currentPage, setCurrentPage] = useState(1);

    /**
     * Amount of books per page.
     */
    const [booksPerPage] = useState(100);

    /**
     * Context of the aplication.
     */
    const context = useContext(SearchContext);

    /**
     * Query hook to get data.
     */
    let result = useQuery({ queryKey: ['booksAuthor', context.query, currentPage], queryFn: () => getBooks("author=" + context.query + "&page=" + currentPage + "&limit=" + booksPerPage), retry: false, enabled: context.query.length > 2 });

    return (
        <div data-testid="author">
            <div className="author-div_centered">
                <h1>Search books by author</h1>
            </div>
            <div className="author-div_centered">
                <SearchInput type="text" placeholder="Write the author..." />
            </div>
            <Pagination itemsPerPage={booksPerPage} totalItems={result.data?.numFound} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            {result.isLoading ? <Loader /> : <CardContainer books={result.data?.docs} />}
        </div>
    );
}

export default Author;