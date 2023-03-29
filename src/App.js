import "./App.css";
import BookItem from "./components/bookItem/BookItem";

const App = () => {
  const books = [
    {
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];
  return (
    <div>
      <h1>Books Champion App!</h1>
      <p>¡Quiero leer libros!</p>
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
    </div>
  );
};

export default App;
