import "./BookItem.css";

import BookCard from "../bookCard/BookCard";
import DateRead from "../dateRead/DateRead";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <BookCard>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
    </BookCard>
  );
};

export default BookItem;
