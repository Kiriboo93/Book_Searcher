import { getByText, render, screen, waitFor } from "@testing-library/react";
import { SearchContextProvider } from '../../../src/context/SearchContext';
import { useContext } from 'react';
import { SearchContext } from '../../../src/context/SearchContext';
import SearchInput from '../../../src/components/searchinput/SearchInput';
import userEvent from "@testing-library/user-event";

/**
 * Testing component 
 * @returns 
 */
function TestingComponent() {
    /**
     * Context of the app.
     */
    const context = useContext(SearchContext);

    return (
        <>
            <p data-testid="test-component">{context.query}</p>
        </>
    );
};

describe("SearchInput component", () => {
    test("SearchInput rendering", () => {
        render(
            <SearchInput type="text" placeholder="Testing" />
        )
        const search = screen.getByTestId("search");
        expect(search).toBeInTheDocument();
    });

    test("SearchInput context change", async () => {
        render(
            <SearchContextProvider>
                <SearchInput type="text" placeholder="Testing" />
                <TestingComponent />
            </SearchContextProvider>
        )
        const searchInput = screen.getByTestId("search-input");
        userEvent.type(searchInput, "queryExample");
        expect(searchInput).toHaveValue("queryExample");

        const testComponent = screen.getByTestId("test-component");
        await waitFor(() => {
            expect(getByText(testComponent, "queryExample")).toBeInTheDocument();
        });
    });
});