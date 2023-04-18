import React from "react";
import FamilyMember from "../familyMember/FamilyMember";

const Family = ({ family }) => {
  const familyMapped = family.map((person) => (
    <FamilyMember name={person.name} age={person.age} />
  ));
  return <>{familyMapped}</>;
};

export default Family;
