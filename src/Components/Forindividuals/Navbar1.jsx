import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {  Container, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled,alpha } from '@mui/material/styles';
import{ Button,Avatar,ButtonGroup }from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
function Navbar1() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const navigate=useNavigate();
 const handlebut=()=>{
    navigate('/browser')
 }
 const navigate1=useNavigate();
 const handlebut1=()=>{
    navigate1('/home')
 }
 const nav=useNavigate();
 const handlebu=()=>{
  nav('/brow');
 }
 const nav1=useNavigate();
 const handle3=()=>{
  nav1('/Sign');
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
          <AppBar position="static" style={{backgroundColor:'white', width: '98%', borderRadius:'50px',marginTop:'2%',marginLeft: '15px',justifyContent:'space-around'}} >
            <Container style={{height:'60px'}}>
              <Toolbar style={{height:'60px',justifyContent:'space-evenly'}}>
                  <div id='mynavbar'>
                  <ul>
                  <li>
                      <Button onClick={handlebut1}style={{color:'black'}}><h3>Home</h3></Button>
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
                        {/* <Avatar  alt="https://cdn.vectorstock.com/i/1000x1000/10/94/world-wildlife-fund-wwf-logo-vector-27431094.webp" src="/static/images/avatar/1.jpg" /> */}
                        <VolunteerActivismIcon/>
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
                      <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:'black'}}
      >
       <h3> My Profile</h3>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
                      </li>
                  </ul>
                  </div>
              </Toolbar>
            </Container>
          </AppBar>
    </>
  );
}
export default Navbar1;