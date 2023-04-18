import React from "react";

const FamilyMember = ({ name, age }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
    </>
  );
};

export default FamilyMember;
