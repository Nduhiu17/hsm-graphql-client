import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  {
    id: 'phone',
    label: 'Mobile Number',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'idNumber',
    label: 'ID Number',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'contactPerson',
    label: 'Contact Person',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, gender, phone, idNumber,contactPerson) {

  return { name, gender, phone, idNumber, contactPerson };
}

const rows = [
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),
  createData('Antony Nduhiu', 'Male', 254722117264, 27514749,'Zane Njogu'),

];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  toolbar: theme.mixins.toolbar,
}))

export default function AppTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.     label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
