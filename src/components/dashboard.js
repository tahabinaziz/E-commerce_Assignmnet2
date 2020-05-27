import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function DenseTable() {
  const classes = useStyles();
  const [record, setRecord] = useState([])

  const getRecord = () => {
      Axios.get("http://localhost:3000/purchaseRecord")
          .then((res) => {
              console.log(res)
              setRecord(res.data)
          })
  }
  useEffect(() => {
      getRecord()
  }, [])
  return (
<div>
    <h1>Purchasing Record</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.map((row) => (
            <TableRow key={row.userName}>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}