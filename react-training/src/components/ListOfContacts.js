import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ListOfContacts = (listOfNames) => {
    listOfNames = listOfNames.listOfNames 
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
    )
}

export default ListOfContacts;