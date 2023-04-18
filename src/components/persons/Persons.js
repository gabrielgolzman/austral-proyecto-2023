import Person from "../person/Person";

const Persons = ({ personsNames }) => {
  const filteredNames = personsNames
    .filter((person) => person.toUpperCase().startsWith("P"))
    .map((name) => <Person name={name} />);

  return <>{filteredNames}</>;
};

export default Persons;
