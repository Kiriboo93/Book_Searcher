import { render, screen, getByText } from "@testing-library/react";
import Welcome from "../../../src/pages/welcome/Welcome";

describe("Years page", () => {

    test("Welcome rendering", () => {
        render(
            <Welcome />
        )
        const page = screen.getByTestId("welcome");
        expect(page).toBeInTheDocument();
        expect(getByText(page, "Welcome to the book searcher!")).toBeInTheDocument();
        expect(getByText(page, "Click on one of the menu options to start your search.")).toBeInTheDocument();
    });
});