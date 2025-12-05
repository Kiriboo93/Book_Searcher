import { render, screen, getByText } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchContextProvider } from "../../../src/context/SearchContext";
import userEvent from "@testing-library/user-event";
import Genre from "../../../src/pages/genre/Genre";

describe("Genre page", () => {
    // Query client from react-query for fetches.
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    });

    test("Genre rendering", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Genre />
            </QueryClientProvider>
        )
        const page = screen.getByTestId("genre");
        expect(page).toBeInTheDocument();
        expect(getByText(page, "Search books by genre")).toBeInTheDocument();

        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        const cardContainer = screen.getByTestId("cardContainer");
        expect(cardContainer).toBeInTheDocument();
    });

    test("Genre search data", async () => {
        render(
            <SearchContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Genre />
                </QueryClientProvider>
            </SearchContextProvider>
        )
        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        userEvent.type(search, "Terror");
        expect(search).toHaveValue("Terror");
    });
});