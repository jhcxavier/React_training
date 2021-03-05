import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
const LandingPage = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center">
        <h1>Contact Management</h1>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        style={{ paddingRight: "10px" }}
      >
        <Button
          variant="contained"
          size="small"
          style={{
            marginRight: "20px",
            color: "blue",
            backgroundColor: "white",
            border: "1px solid blue",
          }}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
};
export default LandingPage;
