import "./BookFilter.css";

const BooksFilter = () => {
  return (
    <>
      <div className="Books-filter">
        <div className="Books-filter__control">
          <select>
            <option value="">Seleccione un año</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default BooksFilter;