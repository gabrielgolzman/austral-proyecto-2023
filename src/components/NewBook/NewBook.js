import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = ({onBookAdded}) => {
  return (
    <div className="new-book">
      <BookForm onBookAdded={onBookAdded} />
    </div>
  );
};

export default NewBook;
