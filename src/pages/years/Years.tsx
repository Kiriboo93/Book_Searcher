import "../../css/pages/years.css";
import { SearchContext } from "../../context/SearchContext";
import SearchInput from "../../components/searchinput/SearchInput";
import CardContainer from "../../components/card/CardContainer";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../utils/services";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";

function Years() {
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
    let result = useQuery({ queryKey: ['booksYears', context.query, currentPage], queryFn: () => getBooks("q=first_publish_year:[" + context.query + "+TO+" + context.query + "]&page=" + currentPage + "&limit=" + booksPerPage), retry: false, enabled: context.query.length > 2 });

    return (
        <div data-testid="years">
            <div className="years-div_centered">
                <h1>Search books by year</h1>
            </div>
            <div className="years-div_centered">
                <SearchInput type="number" placeholder="Write the year..." />
            </div>
            <Pagination itemsPerPage={booksPerPage} totalItems={result.data?.numFound} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            {result.isLoading ? <Loader /> : <CardContainer books={result.data?.docs} />}
        </div>
    );
}

export default Years;