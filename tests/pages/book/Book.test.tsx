import { render, screen, getByText, act } from "@testing-library/react";
import Book from "../../../src/pages/book/Book";

/**
 * Simulation of fetch for Book.
 */
global.fetch = jest.fn(() => Promise.resolve({
    ok: "ok",
    json: () => Promise.resolve({
        title: "Title example",
        description: "Description example",
        authors: [{ author: { key: "/authors/OL1394865A" } }]
    })
})) as jest.Mock;

describe("Book page", () => {
    test("Book rendering", async () => {
        await act(() => render(
            <Book />
        ));
        const page = screen.getByTestId("book");
        expect(page).toBeInTheDocument();
    });

    test("Book title and desc", async () => {
        await act(() => render(
            <Book />
        ));
        const page = screen.getByTestId("book");
        expect(page).toBeInTheDocument();
        expect(getByText(page, "Title example")).toBeInTheDocument();
        expect(getByText(page, "Description example")).toBeInTheDocument();
    });
});