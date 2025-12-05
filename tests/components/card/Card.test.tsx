import { getByText, render, screen } from '@testing-library/react';
import Card from '../../../src/components/card/Card';
import { Book } from '../../../src/types/types';

describe("Card component", () => {
    const bookExample: Book = {
        author_name: ["authorExample1", "authorExample2"],
        cover_i: "coverExample",
        title: "titleExample",
        first_publish_year: 2025
    };

    test("Card rendering", () => {
        render(
            <Card book={bookExample} />
        )
        const card = screen.getByTestId("card");
        expect(card).toBeInTheDocument();
    });

    test("Card title", () => {
        render(
            <Card book={bookExample} />
        )
        const cardTitle = screen.getByTestId("card-title");
        expect(getByText(cardTitle, "titleExample")).toBeInTheDocument();
    });

    test("Card cover", () => {
        render(
            <Card book={bookExample} />
        )
        const cardCover = screen.getByTestId("card-cover");
        expect(cardCover.getAttribute("alt")).toMatch("titleExample cover image.");
        expect(cardCover).toBeInTheDocument();
    });

    test("Card authors", () => {
        const authors = /(.*)authorExample1(.*)authorExample2(.*)/;
        render(
            <Card book={bookExample} />
        )
        const cardBody = screen.getByTestId("card-body");
        expect(getByText(cardBody, authors)).toBeInTheDocument();
    });

    test("Card year", () => {
        const year = /(.*)2025(.*)/;
        render(
            <Card book={bookExample} />
        )
        const cardBody = screen.getByTestId("card-body");
        expect(getByText(cardBody, year)).toBeInTheDocument();
    });
});