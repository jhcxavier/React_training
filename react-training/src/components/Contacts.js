import React, { useState, useEffect, useContext } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/Textfield";
import Grid from "@material-ui/core/Grid";
import { Context } from "../store/appContext";
import Button from "@material-ui/core/Button";

const Contact = ({ getContact }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { store, actions } = useContext(Context);
  // console.log("test store", store.contact);

  const [listOfNames, setListOfNames] = useState([]);

  const cleanFields = () => {
    setPerson({ firstName: "", lastName: "", email: "", phoneNumber: "" });
  };

  useEffect(() => {
    console.log(store.contacts);
  }, [store.contacts]);
  console.log("data from store", store.contacts);
  return (
    <span>
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
          <Box padding={1}>
            <TextField
              required
              variant="outlined"
              size="small"
              label="First Name"
              value={person.firstName}
              onChange={(e) => {
                setPerson({ ...person, firstName: e.target.value });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box padding={1}>
            <TextField
              required
              variant="outlined"
              size="small"
              label="Last Name"
              defaultValue={person.lastName}
              onChange={(e) => {
                setPerson({ ...person, lastName: e.target.value });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box padding={1}>
            <TextField
              required
              variant="outlined"
              size="small"
              label="Email"
              defaultValue={person.email}
              onChange={(e) => {
                setPerson({ ...person, email: e.target.value });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box padding={1}>
            <TextField
              required
              variant="outlined"
              size="small"
              label="Phone Number"
              defaultValue={person.phoneNumber}
              onChange={(e) => {
                setPerson({ ...person, phoneNumber: e.target.value });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Grid>
        <Box
          display="flex"
          justifyContent="flex-end"
          style={{ paddingRight: "10px" }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              marginRight: "5px",
              color: "blue",
              backgroundColor: "white",
              border: "1px solid blue",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {}}
            variant="contained"
            size="small"
            style={{
              marginRight: "5px",
              color: "blue",
              backgroundColor: "white",
              border: "1px solid blue",
            }}
            onClick={() => {
              actions.addContact(person);
            }}
          >
            Create
          </Button>
        </Box>
      </Paper>
    </span>
  );
};
export default Contact;
