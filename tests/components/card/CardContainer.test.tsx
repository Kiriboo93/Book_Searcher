import { render, screen } from '@testing-library/react';
import CardContainer from '../../../src/components/card/CardContainer';
import { Book } from '../../../src/types/types';
import { BrowserRouter } from 'react-router';

describe("CardContainer component", () => {
    const booksExample: Book[] = [{
        author_name: ["authorExample1", "authorExample2"],
        cover_i: "coverExample",
        title: "titleExample",
        first_publish_year: 2025,
        key: "keyExample"
    }, {
        author_name: ["authorExample1", "authorExample2"],
        cover_i: "coverExample",
        title: "titleExample",
        first_publish_year: 2025,
        key: "keyExample"
    }];

    test("CardContainer rendering", () => {
        render(
            <BrowserRouter>
                <CardContainer books={booksExample} />
            </BrowserRouter>
        )
        const cardContainer = screen.getByTestId("cardContainer");
        expect(cardContainer).toBeInTheDocument();
    });

    test("CardContainer without books", () => {
        render(
            <BrowserRouter>
                <CardContainer books={[]} />
            </BrowserRouter>
        )
        const card = screen.queryByTestId("card");
        expect(card).toBeNull();
    });

    test("CardContainer with multiple books", () => {
        render(
            <BrowserRouter>
                <CardContainer books={booksExample} />
            </BrowserRouter>
        )
        const cards = screen.getAllByTestId("card");
        expect(cards.length).toBe(2);
    });
});