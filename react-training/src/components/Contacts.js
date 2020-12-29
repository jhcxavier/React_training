import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/Textfield";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Contact = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [listOfNames, setListOfNames] = useState([]);

  const cleanFields = () => {
    setPerson({ firstName: "", lastName: "", email: "", phoneNumber: "" });
  };

  useEffect(() => {
    cleanFields();
  }, [listOfNames]);

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
            onClick={() => {
              setListOfNames([...listOfNames, person]);
            }}
            variant="contained"
            size="small"
            style={{
              marginRight: "5px",
              color: "blue",
              backgroundColor: "white",
              border: "1px solid blue",
            }}
          >
            Create
          </Button>
        </Box>
      </Paper>
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
          {listOfNames &&
            listOfNames.map((e, index) => (
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
    </span>
  );
};
export default Contact;
