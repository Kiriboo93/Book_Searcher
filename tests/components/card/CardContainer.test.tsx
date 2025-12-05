import { render, screen } from '@testing-library/react';
import CardContainer from '../../../src/components/card/CardContainer';
import { Book } from '../../../src/types/types';

describe("CardContainer component", () => {
    const booksExample: Book[] = [{
        author_name: ["authorExample1", "authorExample2"],
        cover_i: "coverExample",
        title: "titleExample",
        first_publish_year: 2025
    }, {
        author_name: ["authorExample1", "authorExample2"],
        cover_i: "coverExample",
        title: "titleExample",
        first_publish_year: 2025
    }];

    test("CardContainer rendering", () => {
        render(
            <CardContainer books={booksExample} />
        )
        const cardContainer = screen.getByTestId("cardContainer");
        expect(cardContainer).toBeInTheDocument();
    });

    test("CardContainer without books", () => {
        render(
            <CardContainer books={[]} />
        )
        const card = screen.queryByTestId("card");
        expect(card).toBeNull();
    });

    test("CardContainer with multiple books", () => {
        render(
            <CardContainer books={booksExample} />
        )
        const cards = screen.getAllByTestId("card");
        expect(cards.length).toBe(2);
    });
});