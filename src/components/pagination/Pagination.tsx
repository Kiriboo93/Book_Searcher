import "../../css/pagination.css";

function Pagination({ itemsPerPage, totalItems, setCurrentPage, currentPage }: { itemsPerPage: number, totalItems: number, setCurrentPage: CallableFunction, currentPage: number }) {
    /**
     * Populates page numbers.
     */
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    /**
     * Changes current page.
     * @param pageNumber, new value of the page.
     * @param e, element that fires the action.
     */
    const paginate = (pageNumber: number, e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    /**
     * Min page to draw depending on currentPage.
     */
    const minPage = (currentPage - 10 > 0 ? currentPage - 10 : 0);

    /**
     * Max page to draw depending on currentPage.
     */
    const maxPage = (currentPage + 10 < Math.ceil(totalItems / itemsPerPage) ? currentPage + 10 : Math.ceil(totalItems / itemsPerPage));

    return (
        <div>
            {pageNumbers.length === 0 ? "" : <ul className="pagination-ul" data-testid="pagination">
                {pageNumbers.map((number) => (number > minPage && number < maxPage) ? (
                    <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`} data-testid="pagination-page" onClick={(e) => paginate(number, e)}>
                        <a href="!#" className="page-link">{number}</a>
                    </li>
                ) : "")}
                {maxPage === Math.ceil(totalItems / itemsPerPage) ? "" : <span className="pagination-points">...</span>}
            </ul>}
        </div>
    );
};

export default Pagination;