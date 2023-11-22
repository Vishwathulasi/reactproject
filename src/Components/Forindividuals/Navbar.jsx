import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {  Container, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled,alpha } from '@mui/material/styles';
import{ Button,Avatar,ButtonGroup }from '@mui/material';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {
 const navigate=useNavigate();
 const handlebut=()=>{
    navigate('/browser')
 }
 const nav=useNavigate();
 const handlebu=()=>{
  nav('/brow');
 }
 const nav1=useNavigate();
 const handle3=()=>{
  nav1('/Sign');
 }
 const nav2=useNavigate();
 const handle4=()=>{
  nav2('/');
 }

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    
    marginLeft: 0,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(7),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  return (
    <>
        <div>
          
        </div>
          <AppBar position="static" style={{backgroundColor: 'white', width: '98%', borderRadius:'50px',marginTop:'2%',marginLeft: '15px',justifyContent:'space-around'}} >
            <Container style={{height:'60px'}}>
              <Toolbar style={{height:'60px',justifyContent:'space-evenly'}}>
                  <div id='mynavbar'>
                  <ul>
                  <li>
                      <Button onClick={handle4}style={{color:'black'}}><h3>Home</h3></Button>
                      </li>

                      
                      <li>
                        <Button onClick={handlebut} variant="outlined" style={{color:'black',height:'40px',borderColor:'black',width:'200px'}}>
                          <h4>Start fund</h4></Button>
                      </li>
                     
                      <li></li>
                      <li></li>
                      <li></li>
                      <li>
                        <p>
                          <h4>VRV</h4></p>
                      </li>
                      <li>
                        <Avatar  alt="https://cdn.vectorstock.com/i/1000x1000/10/94/world-wildlife-fund-wwf-logo-vector-27431094.webp" src="/static/images/avatar/1.jpg" />
      
                      </li>
                      <li>  
                        <Search >
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{color: 'black'}}
                        />
                    </Search>
                      </li>
                      <li>
                      <ButtonGroup variant="outlined" aria-label="outlined button group" style={{paddingLeft: '5rem'}}>
                      <Button style={{color: 'black',height:'40px',borderColor:'black'}} onClick={handlebu}>
                        <h4>Login</h4></Button>
                      <Button onClick={handle3}style={{color:'black',height:'40px',borderColor:'black'}}>
                        <h4>SignUp</h4></Button>
                      </ButtonGroup>
      
                      </li>
                  </ul>
                  </div>
              </Toolbar>
            </Container>
          </AppBar>
    </>
  );
}
export default Navbar;