import { render, screen, getByText } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchContextProvider } from "../../../src/context/SearchContext";
import userEvent from "@testing-library/user-event";
import Years from "../../../src/pages/years/Years";

describe("Years page", () => {
    // Query client from react-query for fetches.
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    });

    test("Years rendering", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Years />
            </QueryClientProvider>
        )
        const page = screen.getByTestId("years");
        expect(page).toBeInTheDocument();
        expect(getByText(page, "Search books by year")).toBeInTheDocument();

        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        const cardContainer = screen.getByTestId("cardContainer");
        expect(cardContainer).toBeInTheDocument();
    });

    test("Years search data", async () => {
        render(
            <SearchContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Years />
                </QueryClientProvider>
            </SearchContextProvider>
        )
        const search = screen.getByTestId("search-input");
        expect(search).toBeInTheDocument();

        userEvent.type(search, "2025");
        expect(search).toHaveValue(2025);
    });
});