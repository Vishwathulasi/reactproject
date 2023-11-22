import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function SimplePaper() {
    const navigate=useNavigate();
    const handle=()=>{
       navigate('/browser')
    }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height:' 100%',
        },
      }}
    >
     
      <Paper elevation={0}>
        <div style={{textAlign:'center',color:'black'}}><h1>Donation Form</h1></div>
      <div style={{display: 'flex',flexDirection: 'row', justifyContent:'space-evenly'}}>
        <div>
        
            <div style={{paddingRight:'120px'}}><h3>First   Name   : </h3></div>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <div style={{paddingRight:'120px'}}><h3>Last Name : </h3></div>
           <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <div style={{paddingRight:'90px'}}><h3>Email Address:</h3></div>
           <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            <div style={{paddingRight:'0px'}}><p><h3>How much you can pay?:</h3></p> </div>
           <TextField id="outlined-basic" label="Donation Amount" variant="outlined" />
            <div style={{paddingRight:'80px'}}><h3>Credit Number:</h3></div>
           <TextField id="outlined-basic" label="Card Number" variant="outlined" />
        </div>
        <div >
            <img src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg" alt ='dfh'/>
            <h4>QR CODE Scanner</h4><br></br>
            <FormGroup>
             <FormControlLabel required control={<Checkbox />} label="I agree to the Terms & condition" />
            </FormGroup>
        </div>
       
    </div>
    <Button onClick={handle}variant='outLined'><h2>Submit</h2></Button>
        </Paper> 
    </Box>
  );
}