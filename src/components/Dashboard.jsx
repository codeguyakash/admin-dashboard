import React, { useState } from "react";
import rows from "../data.json";

const Dashboard = () => {
  const columns = [
    { id: "employeeId", label: "Employee ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phoneNumber", label: "Phone Number" },
    { id: "numberOfTasks", label: "Number of Tasks" },
    { id: "object", label: "Object" },
    { id: "time", label: "Hour's / Time" },
    { id: "speed", label: "Speed" },
    { id: "efficiency", label: "Efficiency" },
    { id: "date", label: "Date" },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <tr key={index} className="bg-gray-50">
                    {columns.map((column) => (
                      <td
                        key={column.id}
                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                      >
                        {row[column.id]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <select
            onChange={(e) => handleChangeRowsPerPage(e)}
            value={rowsPerPage}
            className="p-2 border border-gray-300 rounded-md text-sm text-gray-900"
          >
            {[10, 30, 40].map((option) => (
              <option key={option} value={option}>
                {option} rows
              </option>
            ))}
          </select>
          <p className="inline-block ml-4">
            Rows per page: {rowsPerPage} / Page: {page + 1}
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:bg-blue-600"
              onClick={() => handleChangePage(page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 mt-4 ml-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:bg-blue-600"
              onClick={() => handleChangePage(page + 1)}
              disabled={rowsPerPage * (page + 1) >= rows.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-600">
        &copy; RMSI (Admin Dashboard) 2024
      </p>
    </>
  );
};

export default Dashboard;
