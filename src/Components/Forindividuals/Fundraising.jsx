// src/Login.js
import React, { useState } from 'react';
import { Paper, TextField, Button,FormControl,InputLabel,Select,Box,MenuItem } from '@mui/material';
import './logo.css';
import { useNavigate } from 'react-router-dom';
const Fundraising = () => {
  const navigate=useNavigate();
  const handle1=()=>{
    navigate('/');
  }
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[qualification,setQualification]=useState('');
  const[contact,setContact]=useState('');
  const[income,setIncome]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,age,qualification,contact,income);
  };
  const [occupation, setOccupation] = React.useState('');

  const handleChange = (event) => {
    setOccupation(event.target.value);
  };
  return (
    <div style={{backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")',backgroundRepeat:'no-repeat',height:'900px',backgroundSize:'cover'}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'bl' }}>
      <Paper elevation={12} style={{ padding: '20px', width: '300px' }}>
        <form onSubmit={handleSubmit}><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br>
         <br></br>
          <TextField label="name" variant="outlined" required margin="normal" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
          <br></br>
          <TextField label="age" type="number" required variant="outlined" margin="normal" fullWidth value={age} onChange={(e)=>{setAge(e.target.value)}}/>
          <br></br>
          <TextField label="Qualification" required type="text" variant="outlined" margin="normal" fullWidth value={qualification} onChange={(e)=>{setQualification(e.target.value)}}/>
          <br></br>
          <br></br>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={occupation}
                label="Occupation"
                onChange={handleChange}
                >
                <MenuItem value={10}>Private</MenuItem>
                <MenuItem value={20}>Government</MenuItem>
                <MenuItem value={30}>self-employed</MenuItem>
                <MenuItem value={40}>un-employed</MenuItem>
                <MenuItem value={50}>others</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <br></br>
            <br></br>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px',width:'300px'}}></textarea>
            <br></br>
            <br></br>
          <TextField label="contact number" required type="text" variant="outlined" margin="normal" maxLength={9} fullWidth value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
          <br></br>
          <br></br>
          <TextField label="Income" required type="number" variant="outlined" margin="normal" fullWidth value={income} onChange={(e)=>{setIncome(e.target.value)}}/>
          <br></br>
          <br></br>
          <Button onClick={handle1}type="submit" variant="contained" color="primary" fullWidth>
            submit
          </Button>
          <br></br>
        </form>
      </Paper>
    </div>
    </div>
  );
};

export default Fundraising;