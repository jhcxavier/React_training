import React, {useState,useEffect} from 'react';
// import logo from './logo.svg';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Textfield';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Validation=()=>{

  
  
  const [firstname,setFirstname] = useState('')
  const [listOfNames,setListOfNames] = useState([])
  
  useEffect(()=>{
    
  }, [firstname])

  return (
    <span>
    <Paper elevation={3}
      style={{
        borderRadius: '4px',
        marginBottom: '15px',
        paddingBottom: '10px',
        marginTop:'10px'
      }}>
      <Grid container>
        <Box padding={1}>
          <TextField
            required 
            variant="outlined" 
            size="small" 
            label="First Name" 
            defaultValue={firstname}
            onChange={ (e)=> {setFirstname(e.target.value)}}
            InputLabelProps={{
              shrink:true
            }}
            />
        </Box>
        <Box padding={1}>
          <TextField
            required 
            variant="outlined" 
            size="small" 
            label="Last Name" 
            defaultValue={''}
            InputLabelProps={{
              shrink:true
            }}
            />
        </Box>
        <Box padding={1}>
          <TextField
            required 
            variant="outlined" 
            size="small" 
            label="Age" 
            defaultValue={''}
            InputLabelProps={{
              shrink:true
            }}
            />
        </Box>
        
        <Box padding={1}>
          <TextField
            required             
            variant="outlined" 
            size="small" 
            label="Country" 
            defaultValue={''}
            InputLabelProps={{
              shrink:true
            }}
            />
        </Box>
      </Grid>
            <Box display='flex' justifyContent="flex-end" style={{paddingRight:'10px'}}>
              <Button variant='contained' size='small' style={{marginRight:'5px', color:'blue', backgroundColor:'white', border:'1px solid blue'}}>
                Cancel
              </Button>
              <Button onClick={()=> { 
                setListOfNames([...listOfNames,firstname])
                console.log(listOfNames)
              }}
               variant='contained' size='small' style={{marginRight:'5px', color:'blue', backgroundColor:'white', border:'1px solid blue'}}>
                Create
              </Button>
            </Box>
    </Paper>
    <Paper elevation={3}
      style={{
        borderRadius: '4px',
        marginBottom: '15px',
        paddingBottom: '10px',
        marginTop:'10px'
      }}>

        <Grid container>
          <Box>
            {listOfNames && listOfNames.map((e,index)=> (
              <h3 key={index} >{e}</h3>
              
            ))}
          </Box> 
        </Grid>
    </Paper>    
    </span>
  )
}

export default Validation;
