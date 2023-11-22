// src/Login.js
import React, { useState } from 'react';
import { Paper, TextField, Button,Avatar } from '@mui/material';
import './logo.css';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username,password);
  };
  const navigate=useNavigate();
  const handle2=()=>{
    navigate('/');
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={12} style={{ padding: '20px', width: '300px' }}>
        <form onSubmit={handleSubmit}>
          <div id='imagecon'>
        <Avatar src="https://cdn.vectorstock.com/i/1000x1000/25/26/user-login-or-access-authentication-icon-vector-6712526.webp" />
        </div>
          <h1 style={{textAlign:'center'}}>Sign in</h1>
          <br></br>
          <TextField label="Username" variant="outlined" margin="normal" fullWidth value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br></br>
          <TextField label="Password" required type="password" variant="outlined" margin="normal" fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <br></br>
          <br></br>
          <Button onClick={handle2}type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <br></br>
          <p>Or sign in using </p>
          <div id='it'>
            <ul><Avatar src="https://cdn.vectorstock.com/i/preview-1x/61/86/instagram-icon-white-vector-25226186.webp" /></ul>
            <ul><Avatar src="https://cdn.vectorstock.com/i/preview-1x/02/37/logo-facebook-vector-31060237.webp" /></ul>
            <ul><Avatar src="https://cdn.vectorstock.com/i/1000x1000/75/54/google-logo-vector-28387554.webp" /></ul>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Signin;
