import { render, screen, act } from '@testing-library/react';
import Author from "../../../src/components/author/Author";

/**
 * Simulation of fetch for Author.
 */
global.fetch = jest.fn(() => Promise.resolve({
    ok: "ok",
    json: () => Promise.resolve({
        name: "Brandon Sanderson",
        bio: "Example bio"
    })
})) as jest.Mock;

describe("Author component", () => {
    /**
     * Key for Brandon Sanderson.
     */
    const key = "OL1394865A";

    test("Author display", async () => {
        await act(() => render(<Author authorKey={key} />));
        const author = screen.getByTestId("author");
        expect(author).toBeInTheDocument();
    });

    test("Author parts", async () => {
        await act(() => render(<Author authorKey={key} />));
        const authorName = screen.getByTestId("author-name");
        expect(authorName.innerHTML).toBe("Brandon Sanderson");
        const authorImage = screen.getByTestId("author-image");
        expect(authorImage).toBeInTheDocument();
        const authorBio = screen.getByTestId("author-bio");
        expect(authorBio.innerHTML).toBe("Example bio");
    });
});