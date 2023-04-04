import "./App.css";

import Books from "./components/books/Books";
import Products from "./components/products/Products";

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
  const products = ["table", "couch", "chair1", "chair2", "couch2"];
  return (
    <div>
      <h1>Books Champion App!</h1>
      <p>¡Quiero leer libros!</p>
      <Books books={books} />
      <Products products={products} />
    </div>
  );
};

export default App;
