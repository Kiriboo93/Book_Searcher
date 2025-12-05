import "../../css/cardContainer.css";
import Card from "./Card";
import { Book } from "../../types/types";

function CardContainer({ books }: { books: Book[] }) {
    return (
        <div className="genre-card-container" data-testid="cardContainer">
            {books?.length > 0 ? books.map((book, i) => <Card key={i} book={book} />) : ""}
        </div>
    );
}

export default CardContainer;