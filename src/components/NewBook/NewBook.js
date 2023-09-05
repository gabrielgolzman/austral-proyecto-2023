import { memo } from "react";

import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = memo(({onBookAdded}) => {
  console.log("In New Book!")
  return (
    <div className="new-book">
      <BookForm onBookAdded={onBookAdded} />
    </div>
  );
});

export default NewBook;
