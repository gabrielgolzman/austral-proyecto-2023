import React from "react";

const Table = ({ netIncomes }) => {
  const tableRows = netIncomes.map((nIncome) => (
    <tr>
      <td>{nIncome.brand}</td>
      <td>{nIncome.income}</td>
    </tr>
  ));

  console.log(netIncomes);

  const sumIncome = netIncomes
    .map((i) => i.income)
    .reduce((prev, acc) => {
      return prev + acc;
    }, 0);
  const averageIncome = sumIncome / netIncomes.length;
  return (
    <>
      <table>
        <thead>
          <th>Brand</th>
          <th>Income</th>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <p>The average income is: {averageIncome.toFixed(2)}</p>
    </>
  );
};

export default Table;
