import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchContextProvider } from '../src/context/SearchContext';

describe("App tests", () => {
    // Query client from react-query for fetches.
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    });

    test("App rendering", () => {
        render(
            <App />
        )
        const page = screen.getByTestId("welcome");
        expect(page).toBeInTheDocument();
    });

    test("App navigation", () => {
        render(
            <SearchContextProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </SearchContextProvider>
        )
        let page = screen.getByTestId("welcome");
        expect(page).toBeInTheDocument();

        userEvent.click(screen.getByTestId("genre-link"));
        page = screen.getByTestId("genre");
        expect(page).toBeInTheDocument();

        userEvent.click(screen.getByTestId("author-link"));
        page = screen.getByTestId("author");
        expect(page).toBeInTheDocument();

        userEvent.click(screen.getByTestId("years-link"));
        page = screen.getByTestId("years");
        expect(page).toBeInTheDocument();
    });
});