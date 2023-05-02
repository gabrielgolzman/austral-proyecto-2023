import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      pageCount={book.pageCount}
      dateRead={book.dateRead}
    />
  ));
  return <div className="books">{booksMapped}</div>;
};

export default Books;
