import "./App.css";

import Books from "./components/books/Books";
import Family from "./components/family/Family";
import Persons from "./components/persons/Persons";
import Products from "./components/products/Products";
import Table from "./components/table/Table";

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
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [
    { name: "Juan", age: 26 },
    { name: "Gabriel", age: 27 },
    { name: "Valentina", age: 22 },
    { name: "Paula", age: 25 },
    { name: "Andrés", age: 20 },
  ];

  const personsSorted = persons.sort((a, b) => b.age - a.age);

  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  return (
    <div>
      <h1>Books Champion App!</h1>
      <p>¡Quiero leer libros!</p>
      <Books books={books} />
      <Products products={products} />
      <Persons personsNames={names} />
      <Family family={personsSorted} />
      <Table netIncomes={netIncomes} />
    </div>
  );
};

export default App;
