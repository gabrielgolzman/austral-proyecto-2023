import DateRead from "../dateRead/DateRead";
import "./BookItem.css";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <div className="book-item-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
    </div>
  );
};

export default BookItem;
