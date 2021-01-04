import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Contacts from "../components/Contacts";
import ListOfContacts from "../components/ListOfContacts"



const LandingPage = () => {

  const [contact,setContact] = useState([]);
  const [name, setName] = useState('');

  useEffect(()=> {
    setContact([...contact, name])
  }, [name])

  const getContact = (e) => {
     setName(e.target.value)
  }


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
          Create
        </Button>
      </Box>
      <Box>        
        <Contacts getContact={getContact}/>

      </Box>
      <Box>
        <ListOfContacts listOfNames={contact}/>
      </Box>
    </Container>
  );
};
export default LandingPage;
