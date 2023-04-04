import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  return (
    <div className="books">
      <BookItem
        title={books[0].title}
        author={books[0].author}
        pageCount={books[0].pageCount}
        dateRead={books[0].dateRead}
      />
      <BookItem
        title={books[1].title}
        author={books[1].author}
        pageCount={books[1].pageCount}
        dateRead={books[1].dateRead}
      />
      <BookItem
        title={books[2].title}
        author={books[2].author}
        pageCount={books[2].pageCount}
        dateRead={books[2].dateRead}
      />
      <BookItem
        title={books[3].title}
        author={books[3].author}
        pageCount={books[3].pageCount}
        dateRead={books[3].dateRead}
      />
    </div>
  );
};

export default Books;
