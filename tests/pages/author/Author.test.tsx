import { render, screen, getByText } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchContextProvider } from "../../../src/context/SearchContext";
import userEvent from "@testing-library/user-event";
import Author from "../../../src/pages/author/Author";

describe("Author page", () => {
    // Query client from react-query for fetches.
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    });

    test("Author rendering", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Author />
            </QueryClientProvider>
        )
        const page = screen.getByTestId("author");
        expect(page).toBeInTheDocument();
        expect(getByText(page, "Search books by author")).toBeInTheDocument();

        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        const cardContainer = screen.getByTestId("cardContainer");
        expect(cardContainer).toBeInTheDocument();
    });

    test("Author search data", async () => {
        render(
            <SearchContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Author />
                </QueryClientProvider>
            </SearchContextProvider>
        )
        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        userEvent.type(search, "Sanders");
        expect(search).toHaveValue("Sanders");
    });
});