import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from '../../../src/components/pagination/Pagination';

describe("Pagination component", () => {
    let currentPage = 1;
    const itemsPerPage = 10;

    test("Pagination without pages", () => {
        render(
            <Pagination itemsPerPage={itemsPerPage} totalItems={0} setCurrentPage={(newPage: number) => { currentPage = newPage }} currentPage={currentPage} />
        )
        const pagination = screen.queryByTestId("pagination");
        expect(pagination).toBeNull();
    });

    test("Pagination rendering", () => {
        render(
            <Pagination itemsPerPage={itemsPerPage} totalItems={100} setCurrentPage={(newPage: number) => { currentPage = newPage }} currentPage={currentPage} />
        )
        const pagination = screen.getByTestId("pagination");
        expect(pagination).toBeInTheDocument();
    });

    test("Pagination change page", () => {
        const prevPage = currentPage;
        render(
            <Pagination itemsPerPage={itemsPerPage} totalItems={100} setCurrentPage={(newPage: number) => { currentPage = newPage }} currentPage={currentPage} />
        )
        const page = screen.getAllByTestId("pagination-page");
        fireEvent.click(page[1]);
        expect(prevPage).not.toBe(currentPage);
    });
});