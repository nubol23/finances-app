import React from "react";
import {
  Fab,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./summary.scss";

const Summary = () => {
  return (
    <div className="base-page">
      <div className="table-container">
        <TableContainer sx={{ maxWidth: 500, mt: 8 }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Concepto</TableCell>
                <TableCell>Monto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>11/11/11</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>10.0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination sx={{ mt: 5 }} count={100} />
      </div>

      <div className="fab-container">
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Summary;
