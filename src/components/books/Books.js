import BookItem from "../bookItem/BookItem";

const Books = ({ books, yearFiltered }) => {
  const booksMapped =
    yearFiltered === ""
      ? books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            pageCount={book.pageCount}
            dateRead={book.dateRead}
          />
        ))
      : books
          .filter(
            (book) => book.dateRead.getFullYear().toString() === yearFiltered
          )
          .map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
              pageCount={book.pageCount}
              dateRead={book.dateRead}
            />
          ));

  return (
    <div className="books">
      {booksMapped.length === 0 ? (
        <p>No hay lecturas disponibles para el año {yearFiltered}</p>
      ) : (
        booksMapped
      )}
    </div>
  );
};

export default Books;
