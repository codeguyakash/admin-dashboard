import React, { useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@mui/material";
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <TableContainer component={Paper} id="table_container">
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell className="columns" key={column.id}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            id="pagination"
            rowsPerPageOptions={[10, 30, 40]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              bgcolor: "primary.main",
              color: "white",
              "& .MuiTablePagination-toolbar": {
                bgcolor: "primary.main",
              },
              "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                {
                  color: "white",
                },
              "& .MuiTablePagination-actions": {
                color: "white",
              },
            }}
          />
        </TableContainer>
      </Container>
      <Typography variant="body2" align="center" mt={1}>
        &copy; RMSI (Admin Dashboard) 2024
      </Typography>
    </>
  );
};

export default Dashboard;
