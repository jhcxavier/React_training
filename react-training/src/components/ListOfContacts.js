import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
        {listOfContacts &&
          listOfContacts.map((e, index) => (
            <Box key={index}>
              <span>
                {e.firstName +
                  " " +
                  e.lastName +
                  " " +
                  e.email +
                  " " +
                  e.phoneNumber}{" "}
              </span>
            </Box>
          ))}
      </Grid>
    </Paper>
  );
};

export default ListOfContacts;
