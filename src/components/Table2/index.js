import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import TableScrollbar from 'react-table-scrollbar';
import './Table2.css';

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <p>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name.."}
      />
      </p>
      <TableScrollbar height="600px">
      <table
        {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  console.log("Cell is", cell.column.Header)
                  return (
                    <td style={{ background: cell.column.Header === "Pull URL" ? "#f5ecec" : null }} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </TableScrollbar>
    </>
  );
}
