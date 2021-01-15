import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const ListOfContacts = () => {
  const { store } = useContext(Context);
  const listOfContacts = store.contacts;
  return (
    <Paper
      elevation={3}
      style={{
        borderRadius: "4px",
        marginBottom: "15px",
        paddingBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Grid container>

      <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell align="right">Last Name</TableCell>
                      <TableCell align="right">E-mail</TableCell>
                      <TableCell align="right">Phone Number&nbsp;</TableCell>                      
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {listOfContacts.map((e, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {e.firstName}
                        </TableCell>
                        <TableCell align="right">{e.lastName}</TableCell>
                        <TableCell align="right">{e.email}</TableCell>
                        <TableCell align="right">{e.phoneNumber}</TableCell>
                        
                      </TableRow>
                    ))}
                  
                  </TableBody>
                </Table>
              </TableContainer>
        
      </Grid>
    </Paper>
  );
};

export default ListOfContacts;
